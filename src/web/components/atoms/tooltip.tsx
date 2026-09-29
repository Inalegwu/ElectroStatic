import { Tooltip as BaseTooltip } from '@base-ui/react/tooltip';

type Props = {
  children: React.ReactElement;
  content: string;
};

export default function Tooltip({ children, content }: Props) {
  return (
    <BaseTooltip.Provider>
      <BaseTooltip.Root>
        <BaseTooltip.Trigger render={children} />
        <BaseTooltip.Portal>
          <BaseTooltip.Positioner sideOffset={4}>
            <BaseTooltip.Popup className='bg-neutral-950 border border-solid border-neutral-900 px-4 py-2 text-xs'>
              <BaseTooltip.Arrow className="relative block w-3 h-1.5 overflow-clip data-[side=bottom]:-top-1.5 data-[side=left]:-right-2.25 data-[side=left]:rotate-90 data-[side=right]:-left-2.25 data-[side=right]:-rotate-90 data-[side=top]:-bottom-1.5 data-[side=top]:rotate-180 before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-[calc(6px*sqrt(2))] before:h-[calc(6px*sqrt(2))] before:bg-neutral-950 before:border before:border-neutral-900 before:transform-[translate(-50%,50%)_rotate(45deg)]" />
              {content}
            </BaseTooltip.Popup>
          </BaseTooltip.Positioner>
        </BaseTooltip.Portal>
      </BaseTooltip.Root>
    </BaseTooltip.Provider>
  );
}
