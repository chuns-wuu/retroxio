/**
 * v0 by Vercel.
 * @see https://v0.dev/t/h9ezeQfRIWW
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import SearchInput from "./SearchInput"
import { Input } from "@/components/ui/input"
import { ReactElement, useState } from "react"

export default function QuestionCard() {
  const onNextClick = (id: number) => {
    if(id < questionCards.length-1)
      setVisibleQuestion(questionCards[id+1])
  }

  const onPrevClick = (id: number) => {
    if(id > 0)
      setVisibleQuestion(questionCards[id-1])
  }

  const questionCards = [
      <Card key="first" className="w-screen max-w-md">
        <CardHeader className="flex flex-row justify-between">
          <Button variant="outline">Prev</Button>
          <CardTitle>Question 1/6</CardTitle>
          <Button variant="outline" onClick={() => onNextClick(0)}>Next</Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg font-medium">Which layers caused the incident?</p>
          <SearchInput suggestionList={["Database", "Network", "Application", "Deployment", "Test"]}/>
        </CardContent>
      </Card>,
      <Card key="second" className="w-screen max-w-md">
        <CardHeader className="flex flex-row justify-between">
          <Button variant="outline" onClick={() => onPrevClick(1)}>Prev</Button>
          <CardTitle>Question 2/6</CardTitle>
          <Button variant="outline" onClick={() => onNextClick(1)}>Next</Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg font-medium">What was the impact?</p>
          <div className="flex flex-row justify-between items-center gap-6">
            <Input placeholder="Who"/> couldn&#39;t <Input placeholder="What"/> for <Input placeholder="How long"/>
          </div>
        </CardContent>
      </Card>,
      <Card key="third" className="w-screen max-w-md">
        <CardHeader className="flex flex-row justify-between">
          <Button variant="outline" onClick={() => onPrevClick(2)}>Prev</Button>
          <CardTitle>Question 3/6</CardTitle>
          <Button variant="outline" onClick={() => onNextClick(2)}>Next</Button>
        </CardHeader>
        <CardContent className="space-y-4 ">
          <p className="text-lg font-medium">Was it caught by QA or tests?</p>
          <div className="flex flex-row justify-between items-center gap-6">
            <Button variant={"outline"}>Yes</Button>
            <Button variant={"outline"}>No</Button>
          </div>
        </CardContent>
      </Card>,
      <Card key="fourth" className="w-screen max-w-md">
        <CardHeader className="flex flex-row justify-between">
          <Button variant="outline" onClick={() => onPrevClick(4)}>Prev</Button>
          <CardTitle>Question 4/6</CardTitle>
          <Button variant="outline" onClick={() => onNextClick(4)}>Next</Button>
        </CardHeader>
        <CardContent className="space-y-4 ">
          <p className="text-lg font-medium">What conditions triggered the incident this time?</p>
          <div className="flex flex-row justify-between items-center gap-6">
          <SearchInput suggestionList={["Code changes", "Traffic spikes", "QA testing", "Security patches"]}/>
          </div>
        </CardContent>
      </Card>,
      <Card key="fifth" className="w-screen max-w-md">
        <CardHeader className="flex flex-row justify-between">
          <Button variant="outline" onClick={() => onPrevClick(5)}>Prev</Button>
          <CardTitle>Question 5/6</CardTitle>
          <Button variant="outline" onClick={() => onNextClick(5)}>Next</Button>
        </CardHeader>
        <CardContent className="space-y-4 ">
          <p className="text-lg font-medium">What were the root causes in your own words?</p>
          <div className="flex flex-row justify-between items-center gap-6">
            <Input></Input>
          </div>
        </CardContent>
      </Card>,
      <Card key="sixth" className="w-screen max-w-md">
        <CardHeader className="flex flex-row justify-between">
          <Button variant="outline" onClick={() => onPrevClick(6)}>Prev</Button>
          <CardTitle>Question 6/6</CardTitle>
          <Button variant="outline">Finish</Button>
        </CardHeader>
        <CardContent className="space-y-4 ">
          <p className="text-lg font-medium">What writing template do you prefer?</p>
          <div className="flex flex-row justify-between items-center gap-6">
            <Button variant={"outline"}>Atlanssian</Button>
            <Button variant={"outline"}>Verbose</Button>
          </div>
        </CardContent>
      </Card>
  ]

  const [visibleQuestion, setVisibleQuestion] = useState<ReactElement>(questionCards[0])


  return (
    <div>
      {visibleQuestion}
    </div>
    
  )
}
