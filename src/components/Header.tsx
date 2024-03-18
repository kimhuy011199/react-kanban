import { Plus } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const handleAddNewTask = () => {};

  return (
    <div className="flex justify-between items-center px-7 py-5 border-b">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold">Welcome back!</h2>
        <p className="text-muted-foreground">
          Here's a list of your tasks for this month!
        </p>
      </div>
      <div>
        <Button
          variant="secondary"
          className="flex gap-1"
          onClick={handleAddNewTask}
        >
          <Plus size={14} strokeWidth={3} />
          <span>Add new task</span>
        </Button>
      </div>
    </div>
  );
};

export default Header;
