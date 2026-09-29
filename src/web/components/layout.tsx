import { Icon } from '@atoms';
import t from '@shared/config';
import type React from 'react';
import { useEffect } from 'react';
import { useGlobalState } from '../state/global';

type LayoutProps = {
  children?: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  t.version.useQuery();
  const { mutate: minimizeWindow } = t.window.minimize.useMutation();
  const { mutate: maximizeWindow } = t.window.maximize.useMutation();
  const { mutate: closeWindow } = t.window.closeWindow.useMutation();

  const colorMode = useGlobalState((s) => s.colorMode);
  const toggleColorMode = useGlobalState((s) => s.toggleColorMode);

  useEffect(() => {
    document.documentElement.dataset.theme = colorMode;
    document.documentElement.style.colorScheme = colorMode;
  }, [colorMode]);

  return (
    <div className='transition w-full h-screen flex flex-col'>
      <div className='flex items-center justify-between w-full border-b border-b-solid border-b-neutral-200 dark:border-b-neutral-900'>
        <span className='text-xs font-bold uppercase pl-1.5'>
          ElectroStatic
        </span>
        <div id='drag-region' className='p-1.5 flex-1' />
        <div className='flex items-center justify-end'>
          <button
            className='p-2.5 border-l border-l-solid dark:border-l-neutral-900 border-l-neutral-200 hover:bg-neutral-200/10 dark:hover:bg-neutral-900/15'
            onClick={() => toggleColorMode()}
          >
            <Icon name='Sun' size={12} />
          </button>
          <button
            className='p-2.5 border-l border-l-solid dark:border-l-neutral-900 border-l-neutral-200 hover:bg-neutral-200/10 dark:hover:bg-neutral-900/15'
            onClick={() => minimizeWindow()}
          >
            <Icon name='Minus' size={12} />
          </button>
          <button
            className='p-2.5 border-l border-l-solid dark:border-l-neutral-900 border-l-neutral-200 hover:bg-neutral-200/10 dark:hover:bg-neutral-900/15'
            onClick={() => maximizeWindow()}
          >
            <Icon name='ArrowsOut' size={12} />
          </button>
          <button
            className='p-2.5 border-l border-l-solid dark:border-l-neutral-900 border-l-neutral-200 hover:bg-neutral-200/10 dark:hover:bg-neutral-900/15'
            onClick={() => closeWindow()}
          >
            <Icon name='X' size={12} />
          </button>
        </div>
      </div>
      {children}
    </div>
  );
}
