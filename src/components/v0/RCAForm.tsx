import Link from "next/link";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress"
import QuestionCard from "./components/QuestionCard";

export default function RCAForm() {
  return (
    <div className="flex flex-col items-center w-full">
      <Progress value={100} />
      <div className="flex flex-row items-center justify-between w-3/4 py-6 ">
        <Link
          href="/write/2"
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          prefetch={false}
        >
          Back
        </Link>
        <p className="mx-auto md:text-xl"> Finally, can you help me understand the root causes? </p>
        <Link
          href="/profile"
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          prefetch={false}
        >
          Finish
        </Link>
      </div>
      <div className="flex h-full items-center justify-between">
        <QuestionCard />
      </div>
    </div>
  )
}