import { icons } from "lucide-react";
import { memo } from "react";

type Props = {
  name: keyof typeof icons;
  size: number;
  color: string;
  className: string;
};

const Icon = memo(({ name, size, color, className }: Props) => {
  const LucideIcon = icons[name];

  return (
    <LucideIcon name={name} size={size} className={className} color={color} />
  );
});

export default Icon;
