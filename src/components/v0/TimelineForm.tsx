import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

import { Column } from "../dnd/Column";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Progress } from "../ui/progress";
import { Separator } from "@/components/ui/separator"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { useRef, useState } from "react";
import SideDetailForm from "./components/SideDetailForm";
import { Input } from "../ui/input";
import Link from "next/link";
import TimelineDetail from "./components/TimelineDetail";


export interface Task {
  id: string,
  title: string
}

export default function TimelineForm() {
  const timelineRef = useRef<{ handleNewAction: () => void, handleDelete: () => Array<string>}>(null)

  const [newAction, setNewAction] = useState(true);
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "Rollback changes" },
    { id: "2", title: "Communicate with monitoring team" },
    { id: "3", title: "Scale web tier" },
    { id: "4", title: "Invalidate cache" },
  ]);

  const [deletedTasks, setDeletedTasks] = useState<string[]>([]);
  const [filteredTasks, setFilteredTasks] = useState(tasks)

  const addTask = (title: string) => {
    setTasks((tasks) => [...tasks, { id: (tasks.length + 1).toString(), title }]);
  };

  const deleteTasks = (checkedTasks: string[]) => {
    setDeletedTasks(checkedTasks);
    setFilteredTasks(filteredTasks.filter((t) => !checkedTasks.includes(t.title)));
    console.log(filteredTasks);
  }

  const saveNewAction = (title: string) => {
    cancelNewAction();
    setFilteredTasks([...filteredTasks, { id: (tasks.length + 1).toString(), title }]);
  }

  const cancelNewAction = () => {
    if(newAction)
      setNewAction(false);
  }

  return (
    <div className="flex flex-col items-center w-full">
      <Progress value={66} />
      <div className="flex flex-row items-center justify-between w-3/4 py-6 ">
        <Link
          href="/write/1"
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          prefetch={false}
        >
          Back
        </Link>
        <p className="mx-auto md:text-xl"> Noted! I wrote a few actions potentially related to this incident, can you edit and reorder them? </p>
        <Link
          href="/write/3"
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          prefetch={false}
        >
          Continue
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="">
          <div className="flex w-1/2 justify-between mr-auto">
          {/* <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-[240px] justify-start text-left font-normal">
                <CalendarDaysIcon className="mr-1 h-4 w-4 -translate-x-1" />
                <span>Incident start time</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <div className="rounded-md border p-4">
                <div className="grid grid-cols-2 gap-4">
                  <Calendar mode="single" initialFocus />
                  <div className="space-y-2">
                    <Label htmlFor="time">Time</Label>
                    <Input
                      id="time"
                      type="time"
                      className="h-10 rounded-md border border-gray-300 px-3 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-primary-500"
                    />
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover> */}
            <Button variant="outline" size="sm" onClick={() => {
              if(timelineRef.current) {
                const checkedItems = timelineRef.current.handleDelete();
                deleteTasks(checkedItems);
              }
            }}>
              Delete
            </Button>
            <Button variant="outline" size="sm" onClick={() => {
              if(timelineRef.current) {
                timelineRef.current.handleNewAction();
                setNewAction(true);
              }
            }}>
              New action
            </Button>
          </div>
          <div className="flex items-start my-6 justify-items-start mr-auto border-t border-gray-300 dark:border-gray-600 w-1/2 h-1" />
        </div>  
        <TimelineDetail newAction={newAction} saveNewAction={saveNewAction} cancelNewAction={cancelNewAction} setTasks={setFilteredTasks} tasks={filteredTasks} ref={timelineRef}/>
      </div>
    </div>
  )
}

function CalendarDaysIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}