import path from 'node:path';
import { Worker } from 'node:worker_threads';
import { NodeRuntime } from '@effect/platform-node';
import { Console, Data, Effect, Fiber, Schedule } from 'effect';
import { app } from 'electron';

class WorkerCrashedError extends Data.TaggedError('WorkerCrashedError')<{
  readonly name: string;
  readonly cause: unknown;
}> {}

type ManagedWorker = {
  readonly name: string;
  readonly path: string;
};

const workersDir = app.isPackaged
  ? path.join(
      process.resourcesPath,
      'app.asar.unpacked',
      'out',
      'main',
      'workers',
    )
  : path.join(__dirname);

const _workerFile = (name: string) => path.join(workersDir, `${name}.js`);

const WORKERS: ManagedWorker[] = [
];

const runWorker = (worker: ManagedWorker) =>
  Effect.async<void, WorkerCrashedError>((resume) => {
    const thread = new Worker(worker.path);

    thread.on('error', (cause) => {
      resume(Effect.fail(new WorkerCrashedError({ name: worker.name, cause })));
    });

    thread.on('exit', (code) => {
      if (code !== 0) {
        resume(
          Effect.fail(
            new WorkerCrashedError({
              name: worker.name,
              cause: new Error(`exited with code ${code}`),
            }),
          ),
        );
      }
    });

    return Effect.sync(() => {
      thread.terminate();
    });
  });

const RESTART_POLICY = Schedule.spaced('1 second').pipe(
  Schedule.intersect(Schedule.recurs(5)),
);

const supervised = (worker: ManagedWorker) =>
  runWorker(worker).pipe(
    Effect.tapError((error) =>
      Console.error(`[${worker.name}] crashed:`, error.cause),
    ),
    Effect.retry(RESTART_POLICY),
    Effect.tapError(() =>
      Console.error(`[${worker.name}] exceeded restart attempts, giving up`),
    ),
  );

const program = Effect.gen(function* () {
  yield* Console.log(
    `Starting ${WORKERS.length} workers: ${WORKERS.map((w) => w.name.toUpperCase()).join(', ')}`,
  );

  if(WORKERS.length===0){
    return yield* Effect.succeed("No workers to run...")
  }

  const fibers = yield* Effect.forEach(WORKERS, (worker) =>
    Effect.fork(supervised(worker)),
  );

  yield* Fiber.joinAll(fibers);
});

program.pipe(
  Effect.scoped,
  Effect.tapErrorCause((cause) => Console.error('fatal:', cause)),
  NodeRuntime.runMain,
);
