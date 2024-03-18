import { SquareGanttChart } from 'lucide-react';

const Logo = () => {
  return (
    <div className="p-6 h-24 flex gap-3 items-center text-primary">
      <SquareGanttChart strokeWidth={2.5} size={32} />
      <span className="text-foreground text-2xl font-bold">kanban</span>
    </div>
  );
};

export default Logo;
