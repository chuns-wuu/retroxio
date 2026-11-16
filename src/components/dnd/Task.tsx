import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// import "./dnd.css"
import { Button } from "../ui/button";

interface TaskProps {
  id: string;
  title: string;
  onDetailsClick: (taskId: string) => void;
  onCheckClick: (taskId: string, checked: boolean) => void;
}

export const Task: React.FC<TaskProps> = ({ id, title, onDetailsClick, onCheckClick}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };


  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="dnd-task"
    >
      <input type="checkbox" className="dnd-checkbox" onChange={(e) => onCheckClick(title, e.target.checked)} />
      {title}
      <Button variant="outline" size="sm" onClick={() => onDetailsClick(title)}> Details </Button>
    </div>
  );
};