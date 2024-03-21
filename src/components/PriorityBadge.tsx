import { ArrowDown, ArrowRight, ArrowUp } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { Badge } from './ui/badge';

const TASK_PRIORITY_ICON = {
  high: { color: 'bg-red-500', icon: <ArrowUp size={12} strokeWidth={3} /> },
  normal: {
    color: 'bg-sky-500',
    icon: <ArrowRight size={12} strokeWidth={3} />,
  },
  low: { color: 'bg-green-500', icon: <ArrowDown size={12} strokeWidth={3} /> },
} as any;

export const PriorityItem = ({
  priority,
  className = '',
}: {
  priority: string;
  className?: string;
}) => {
  const priorityObj = TASK_PRIORITY_ICON[priority];

  return (
    <div className={twMerge('flex items-center gap-1', className)}>
      {priorityObj.icon}
      <span className="first-letter:uppercase">{priority}</span>
    </div>
  );
};

const PriorityBadge = ({ priority }: { priority: string }) => {
  const priorityObj = TASK_PRIORITY_ICON[priority];

  return (
    <Badge className={`${priorityObj.color} hover:${priorityObj.color}`}>
      <PriorityItem priority={priority} />
    </Badge>
  );
};

export default PriorityBadge;
