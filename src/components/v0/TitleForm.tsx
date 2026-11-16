import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Progress } from "../ui/progress";
import { useState } from "react";

export default function TitleForm() {
  const [placeholder, setPlaceholder] = useState("Let us do it for you in 5 minutes")
  
  const onInputHover = () => {
    setPlaceholder("What was the error in your own words?")
  }

  const onInputBlur = () => {
    setPlaceholder("Let us do it for you in 5 minutes")
  }

  return (
    <section className="flex justify-center">
      <div className="container text-center">
        <div className="space-y-3">
          <h1 className="text-3xl lg:pt-56 pt-10 font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Blameless retrospective
          </h1>
          <p className="mx-auto text-gray-500 md:text-xl dark:text-gray-400">
          Don&#39;t start from scratch. Use our retrospective boilerplates instead.
          </p>
          <div className="pt-6 flex flex-row justify-center items-start gap-8 h-screen">
            <Input id="name" 
              placeholder={placeholder} 
              className="w-1/2 h-12 bg-gray-200 rounded-md px-4 py-2 focus:bg-white focus:outline-none transition-colors duration-200"
              onClick={() => onInputHover()}
              onBlur={() => onInputBlur()}
            />
            <Link
              href="/write/1"
              className="inline-flex h-12 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              prefetch={false}
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}