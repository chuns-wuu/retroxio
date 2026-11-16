import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { Task as TaskComponent} from "./Task";
import { Task } from "@/components/v0/TimelineForm"

import "./dnd.css"


// Define the props interface
interface ColumnProps {
  tasks: Task[];
  onDetailsClick: (taskId: string) => void;
  onCheckClick: (taskId: string, checked: boolean) => void;
}


export const Column: React.FC<ColumnProps> = ({ tasks, onDetailsClick, onCheckClick }) => {
  return (
    <div className="dnd-column">
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
          <TaskComponent key={task.id} id={task.id} title={task.title} onDetailsClick={onDetailsClick} onCheckClick={onCheckClick} />
        ))}
      </SortableContext>
    </div>
  );
};