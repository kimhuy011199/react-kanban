import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Subtask } from '@/lib/interface';

const SubtaskProgress = ({ subtasks }: { subtasks: Subtask[] }) => {
  const initialValue = 0;

  const completedTaskNumber = subtasks.reduce(
    (accumulator, task) => (task.isCompleted ? ++accumulator : accumulator),
    initialValue
  );
  const percentage = completedTaskNumber / subtasks.length;

  return (
    <div className="flex gap-2 items-center">
      <div className="flex w-3 h-3 text-primary">
        <CircularProgressbar
          strokeWidth={20}
          value={percentage * 100}
          styles={buildStyles({
            pathColor: `rgba(37, 99, 235, 1)`,
          })}
        />
      </div>
      <span>
        {completedTaskNumber} {`task${completedTaskNumber > 1 ? 's' : ''}`} done
      </span>
    </div>
  );
};

export default SubtaskProgress;
