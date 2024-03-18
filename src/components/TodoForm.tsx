import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
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
import { TODO_BADGE_TYPE, TODO_STATUS } from '@/lib/constants';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
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
  status: z.string(),
  label: z.string(),
  deadline: z.any(),
});

const TodoForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      status: TODO_STATUS[0].value,
      label: TODO_BADGE_TYPE[0].value,
      deadline: '',
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 mt-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex">
              <FormLabel className="min-w-32 mt-5">Title</FormLabel>
              <div className="flex flex-col w-full gap-2">
                <FormControl>
                  <Input
                    placeholder="Design settings page"
                    disabled={isSubmitting}
                    {...field}
                  />
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
                    placeholder="Design a visually appealing mockup for the settings page."
                    disabled={isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
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
                    <SelectValue placeholder="Select a todo status" />
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
              <Popover>
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
                        new Intl.DateTimeFormat('en-US').format(field.value)
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
                      field.onChange(e);
                      console.log(e);
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
          <Button type="submit">Save</Button>
        </div>
      </form>
    </Form>
  );
};

export default TodoForm;
