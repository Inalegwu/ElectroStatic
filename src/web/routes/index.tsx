import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return <div className='w-full h-full p-1.5 font-medium'>hello world</div>;
}
