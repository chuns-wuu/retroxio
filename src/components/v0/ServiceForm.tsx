/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3wZQNCqli9L
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import MultiSelectBubble from "./components/MultiSelectBubble"
import { Progress } from "@/components/ui/progress"
import SearchInput from "./components/SearchInput"
import Link from "next/link"

export default function ServiceForm() {
  return (
    <div className="flex flex-col items-center w-full">
      <Progress value={33}/>
      <div className="flex flex-row items-center justify-between w-3/4 py-6 ">
        <Link
          href="/write/0"
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          prefetch={false}
        >
          Back
        </Link>
        <p className="mx-auto md:text-xl"> Got it. Hope you&#39;re feeling ok! What was the underlying tech stack? </p>
        <Link
          href="/write/2"
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          prefetch={false}
        >
          Continue
        </Link>
      </div>
      <div className="pt-10 flex flex-row justify-center items-start gap-8 w-full h-screen">
        <div>
          <Label htmlFor="incidentService">Select relevant technologies:</Label>
        </div>
        <SearchInput suggestionList={["Python", "Java", "Javascript", "Ruby on Rails", "ElasticSearch", "MongoDB", "AWS RDS", "AWS CloudFront"]}/>
      </div>
    </div>
  )
}