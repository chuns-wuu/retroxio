import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
  DragEndEvent,
  PointerSensorOptions,
} from "@dnd-kit/core";
import type { PointerEvent } from 'react';
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import SideDetailForm from "./SideDetailForm";
import { Column } from "../../dnd/Column";
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Task } from "@/components/v0/TimelineForm"

class MyPointerSensor extends PointerSensor {
  static activators = [
    {
      eventName: "onPointerDown" as const,
      handler: ({nativeEvent: event}: PointerEvent<Element>,  {onActivation }: PointerSensorOptions): boolean => {
        if (
          !event.isPrimary ||
          event.button !== 0 ||
          isInteractiveElement(event.target as HTMLElement)
        ) {
          return false;
        }

        return true;
      },
    },
  ];
}

function isInteractiveElement(element: HTMLElement | null): boolean {
  const interactiveElements = [
    'button',
    'input',
    'textarea',
    'select',
    'option',
  ];

  if (interactiveElements.includes(element!!.tagName.toLowerCase())) {
    return true;
  }

  return false;
}

interface TimelineDetailProp {
  newAction: boolean,
  cancelNewAction: () => void,
  tasks: Task[],
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>,
  saveNewAction: (title: string) => void
}

const TimelineDetail = forwardRef(function TimelineDetail({newAction, cancelNewAction, tasks, setTasks, saveNewAction}: TimelineDetailProp, ref: React.Ref<any>) {

  const sensors = useSensors(
    useSensor(MyPointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const getTaskPos = (id: string) => tasks.findIndex((task) => task.id === id);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id === over?.id) return;

    setTasks((tasks) => {
      const originalPos = getTaskPos(active.id.toString());
      const newPos = getTaskPos(over!!.id.toString());

      return arrayMove(tasks, originalPos, newPos);
    });
  };

  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [checkedItems, setCheckedItems] =  useState<Array<string>>([]);

  const handleDetailsClick = (item: string) => {
    setSelectedItem(item);
    cancelNewAction();
  };

  const handleCheckClick = (item: string, isChecked: boolean) => {
    if (isChecked) {
      setCheckedItems([...checkedItems, item])
    } else {
      setCheckedItems(checkedItems.filter((t) => t !== item))
    }
  }


  useImperativeHandle(ref, () => {
    return {
      handleNewAction() {
        setSelectedItem(null)
      },
      handleDelete() {
        return checkedItems;
      }
    }
  }, [checkedItems]);

  return (
    <div className="flex flex-row items-start gap-8">
        <div className="h-screen w-[600px]">
          <DndContext
              sensors={sensors}
              collisionDetection={closestCorners}
              onDragEnd={handleDragEnd}
            >
              <Column tasks={tasks} onDetailsClick={handleDetailsClick} onCheckClick={handleCheckClick}/>
            </DndContext>
            
        </div>
        <div className="items-start h-screen w-[600px]">
          {tasks.map((item, index) => (
              <SideDetailForm selectedItem={selectedItem} item={item} newAction={newAction} handleNewAction={saveNewAction} key={item.id}/>
          ))}
          <SideDetailForm selectedItem="" item={null} newAction={newAction} handleNewAction={saveNewAction}/>
        </div>
    </div>
  )
});

export default TimelineDetail;