/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MuzWPV2hqiE
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function MultiSelectBubble() {
  const [options, setOptions] = useState<string[]>(["ElasticSearch", "MongoDB", "MySQL"])
  const [customOption, setCustomOption] = useState("")
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && customOption.trim() !== "") {
      setOptions([...options, customOption.trim()])
      setSelectedOptions([...selectedOptions, customOption.trim()])
      setCustomOption("")
    }
  }
  const handleOptionSelect = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option))
    } else {
      setSelectedOptions([...selectedOptions, option])
    }
  }
  const handleCustomOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomOption(e.target.value)
  }
  return (
    <div className="w-full max-w-md">
      <div className="flex flex-wrap gap-2 mb-2">
        {selectedOptions.map((option) => (
          <div
            key={option}
            className="bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-medium flex items-center gap-2"
          >
            {option}
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              onClick={() => handleOptionSelect(option)}
            >
              <XIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
      <div className="relative">
        <Input
          type="text"
          placeholder="Add your own option"
          value={customOption}
          onChange={handleCustomOptionChange}
          onKeyDown={handleKeyDown}
          className="pr-10"
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2"
          disabled={customOption.trim() === ""}
          onClick={() => {
            if (customOption.trim() !== "") {
              setOptions([...options, customOption.trim()])
              setSelectedOptions([...selectedOptions, customOption.trim()])
              setCustomOption("")
            }
          }}
        >
          <PlusIcon className="w-4 h-4" />
        </Button>
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">Select from the following options:</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              className={`bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                selectedOptions.includes(option)
                  ? "bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  : "hover:bg-gray-300 dark:hover:bg-gray-700"
              }`}
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function XIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}