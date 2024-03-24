import { ReactNode, useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import Link from './Link';
import { Link as LinkIcon } from 'lucide-react';

const AboutSheet = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="sm:max-w-[960px] overflow-y-scroll max-h-screen">
        <SheetHeader>
          <SheetTitle>About Kanban application</SheetTitle>
          <SheetDescription className="text-base">
            Kanban is a robust todo management web application designed to
            streamline your task organization and productivity.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 mt-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">Key features</h3>
            <ul className="text-muted-foreground list-disc ml-4 flex flex-col gap-2">
              <li>
                <span className="font-medium text-foreground">
                  Tasks Management: &nbsp;
                </span>
                Create, view, update, and delete tasks effortlessly, ensuring
                your to-do list is always up-to-date.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Board View: &nbsp;
                </span>
                Tasks can be dragged and dropped across four columns - TODO,
                DOING, DONE, and PENDING, providing a clear visualization of
                task progress.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Table View: &nbsp;
                </span>
                Access a comprehensive list of all tasks in a structured table
                format for quick reference and overview.
                <ul className="text-muted-foreground list-disc ml-6 flex flex-col gap-2 mt-1.5">
                  <li>
                    <span className="font-medium text-foreground">
                      Search Functionality: &nbsp;
                    </span>
                    Easily search for specific tasks by their title.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">
                      Filtering Options: &nbsp;
                    </span>
                    Filter tasks based on status, priority, and deadline,
                    enabling focused task management.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">
                      Sorting Capabilities: &nbsp;
                    </span>
                    Sort tasks by various criteria for improved organization.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">
                      View Columns: &nbsp;
                    </span>
                    Customize your viewing experience by toggling visibility of
                    columns.
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Dark/Light Mode: &nbsp;
                </span>
                Switch between dark and light themes to suit your visual
                preferences.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Tech stack</h3>
            <ul className="text-muted-foreground list-disc ml-4 grid grid-cols-3 gap-1">
              <li>React</li>
              <li>Redux Toolkit</li>
              <li>Typescript</li>
              <li>TailwindCSS</li>
              <li>ShadcnUI</li>
              <li>TanStack Table</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-6">
          <span className="mr-2 font-medium">External Link: </span>
          <Link href="https://github.com/kimhuy011199/react-kanban">
            <LinkIcon size={14} />
            <span>Github Repo</span>
          </Link>
          <Link href="https://github.com/kimhuy011199/react-kanban">
            <LinkIcon size={14} />
            <span>My Portfolio</span>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AboutSheet;
