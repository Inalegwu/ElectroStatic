import type { IconProps as PhosphorIconProps } from '@phosphor-icons/react';
import * as PhosphorIcons from '@phosphor-icons/react';
import type React from 'react';
import { memo } from 'react';

export type IconName = {
  [K in keyof typeof PhosphorIcons]: (typeof PhosphorIcons)[K] extends React.ComponentType<PhosphorIconProps>
    ? K
    : never;
}[keyof typeof PhosphorIcons];

export type IconWeight = PhosphorIconProps['weight'];

export type IconProps = {
  name: IconName;
  size?: number | string;
  color?: string;
  weight?: IconWeight;
  mirrored?: boolean;
  alt?: string;
};

function IconComponent({
  name,
  size = 24,
  color = 'currentColor',
  weight = 'regular',
  mirrored = false,
  alt,
}: IconProps) {
  const PhosphorIcon = PhosphorIcons[
    name
  ] as React.ComponentType<PhosphorIconProps>;

  if (!PhosphorIcon) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(
        `[Icon] "${name}" is not a valid @phosphor-icons/react icon.`,
      );
    }
    return null;
  }

  return (
    <PhosphorIcon
      size={size}
      color={color}
      weight={weight}
      mirrored={mirrored}
      alt={alt}
    />
  );
}

const Icon = memo(IconComponent);

export default Icon;
