import { ArrowDown, ArrowRight, ArrowUp } from 'lucide-react';
import { Badge } from './ui/badge';

const TASK_PRIORITY_ICON = {
  high: { color: 'bg-red-500', icon: <ArrowUp size={12} strokeWidth={3} /> },
  normal: {
    color: 'bg-sky-500',
    icon: <ArrowRight size={12} strokeWidth={3} />,
  },
  low: { color: 'bg-green-500', icon: <ArrowDown size={12} strokeWidth={3} /> },
} as any;

const PriorityBadge = ({ priority }: { priority: string }) => {
  const priorityObj = TASK_PRIORITY_ICON[priority];
  const icon = priorityObj.icon;

  return (
    <Badge className={priorityObj.color}>
      <div className="flex items-center gap-1">
        {icon}
        <span>{priority}</span>
      </div>
    </Badge>
  );
};

export default PriorityBadge;
