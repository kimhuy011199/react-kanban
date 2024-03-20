import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useFieldArray } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import {
  LIMITED_SUBTASKS,
  TODO_BADGE_TYPE,
  TODO_STATUS,
} from '@/lib/constants';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { cn, formatCalendarDate } from '@/lib/utils';
import { CalendarIcon, Plus, X } from 'lucide-react';
import { Calendar } from './ui/calendar';

const formSchema = z.object({
  title: z
    .string()
    .min(5, {
      message: 'Title must be at least 5 characters.',
    })
    .max(50, {
      message: 'Title must not be longer than 50 characters.',
    }),
  description: z
    .string()
    .max(120, {
      message: 'Description must not be longer than 120 characters.',
    })
    .optional(),
  subtasks: z
    .array(
      z.object({
        id: z.string(),
        title: z
          .string()
          .min(5, {
            message: 'Title must be at least 5 characters.',
          })
          .max(50, {
            message: 'Title must not be longer than 50 characters.',
          }),
        isCompleted: z.boolean(),
      })
    )
    .optional(),
  status: z.string(),
  label: z.string(),
  deadline: z.any(),
});

const defaultValues = {
  title: '',
  description: '',
  subtasks: [],
  status: TODO_STATUS[0].value,
  label: TODO_BADGE_TYPE[0].value,
  deadline: new Date(),
};

export type TodoFormValuesType = z.infer<typeof formSchema>;

const TodoForm = ({
  formValues = defaultValues,
  onSubmit,
}: {
  formValues?: any;
  onSubmit: (values: TodoFormValuesType, id?: string) => void;
}) => {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const form = useForm<TodoFormValuesType>({
    resolver: zodResolver(formSchema),
    defaultValues: formValues,
  });

  const { fields, append, remove } = useFieldArray({
    name: 'subtasks',
    control: form.control,
    keyName: '_id',
  });

  const { isSubmitting } = form.formState;

  const handleSubmitForm = (values: TodoFormValuesType) => {
    const serializedDate = formatCalendarDate(values.deadline);
    onSubmit({ ...values, deadline: serializedDate }, formValues?.id);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmitForm)}
        className="space-y-2 mt-4"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex">
              <FormLabel className="min-w-32 mt-5">Title</FormLabel>
              <div className="flex flex-col w-full gap-1">
                <FormControl>
                  <Input disabled={isSubmitting} {...field} />
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="flex">
              <FormLabel className="min-w-32 mt-5">Description</FormLabel>
              <div className="flex flex-col w-full gap-2">
                <FormControl>
                  <Textarea
                    className="resize-none"
                    disabled={isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <div className="flex pt-2">
          <FormLabel className="min-w-32 mt-4">Subtasks</FormLabel>
          <ul className="flex flex-col w-full gap-2">
            {fields.map((field, index) => (
              <li key={field._id} className="flex gap-2">
                <FormField
                  control={form.control}
                  name={`subtasks.${index}.title`}
                  render={({ field }) => (
                    <FormItem className="space-y-0 w-full">
                      <FormControl>
                        <Input disabled={isSubmitting} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  variant="ghost"
                  type="button"
                  className="p-0 text-muted-foreground hover:bg-transparent"
                  onClick={() => remove(index)}
                  disabled={isSubmitting}
                >
                  <X />
                </Button>
              </li>
            ))}
            <Button
              variant="secondary"
              type="button"
              className="flex w-full text-sm"
              onClick={() =>
                append({
                  id: uuidv4(),
                  title: '',
                  isCompleted: false,
                })
              }
              disabled={fields?.length > LIMITED_SUBTASKS || isSubmitting}
            >
              <Plus size={14} strokeWidth={3} />
              <span className="pl-1">Add new subtask</span>
            </Button>
          </ul>
        </div>
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem className="flex">
              <FormLabel className="min-w-32 mt-5">Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a todo status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {TODO_STATUS.map((status) => (
                    <SelectItem
                      key={status.id}
                      value={status.value}
                      disabled={isSubmitting}
                    >
                      {status.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="label"
          render={({ field }) => (
            <FormItem className="flex">
              <FormLabel className="min-w-32 mt-5">Label</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a todo label" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {TODO_BADGE_TYPE.map((badge) => (
                    <SelectItem
                      key={badge.id}
                      value={badge.value}
                      disabled={isSubmitting}
                    >
                      {badge.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="deadline"
          render={({ field }) => (
            <FormItem className="flex">
              <FormLabel className="min-w-32 mt-5">Deadline</FormLabel>
              <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      className={cn(
                        'w-full pl-3 text-left font-normal',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value ? (
                        formatCalendarDate(field.value)
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={(e) => {
                      setCalendarOpen(false);
                      field.onChange(e);
                    }}
                    disabled={(date) => date < new Date('1900-01-01')}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end pt-4">
          <Button className="px-8" type="submit">
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default TodoForm;
