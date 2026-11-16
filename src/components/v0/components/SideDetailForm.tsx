/**
 * v0 by Vercel.
 * @see https://v0.dev/t/s8dvqOWsBJl
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { Task } from '@/components/v0/TimelineForm'


interface SideDetailProps {
  selectedItem: string | null,
  item: Task | null,
  newAction: boolean,
  handleNewAction: (newTitle: string) => void
}

export default function SideDetailForm({ selectedItem, item, newAction, handleNewAction}: SideDetailProps) {
  const [newTitle, setNewTitle] = useState("")

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
  };

  const title = newAction ? "New action" : "Action details"

  return (
    <div>
        {(selectedItem == item?.title || selectedItem == "" && newAction) && (<Card className="w-full">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input value={item?.title} placeholder="Enter action name" onChange={handleInputChange}/>
          <Textarea placeholder="Did it work? What's the rationale?" className="min-h-[200px]" />
        </CardContent>
        <CardFooter>
          <Button className="ml-auto" onClick={() => handleNewAction(newTitle)}>Save action</Button>
        </CardFooter>
      </Card>)}
    </div>
  )
}