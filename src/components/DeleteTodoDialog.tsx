import { useDispatch } from 'react-redux';
import { Button } from './ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { deleteTask } from '@/reducers/todo-slice';
import { useToast } from './ui/use-toast';

const DeleteTodoDialog = ({
  id,
  type,
  callback,
}: {
  id: string;
  type: string;
  callback: () => void;
}) => {
  const dispatch = useDispatch();
  const { toast } = useToast();

  const handleDeleteTask = () => {
    dispatch(deleteTask({ id, type }));
    toast({
      description: 'Deleted task successfully',
      icon: '✅',
    });
    callback();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete this task?</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Are you sure you want to delete the this task? This action cannot be
          undone.
        </DialogDescription>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
          <Button variant="destructive" onClick={handleDeleteTask}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteTodoDialog;
