import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className='w-full h-full p-1.5 font-medium flex flex-col'>
      <button className='rounded-lg text-sm border border-solid border-neutral-200 bg-white'>
        Press Me
      </button>
      hello world
    </div>
  );
}
