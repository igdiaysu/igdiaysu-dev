"use client"
import { TableOfContents } from "@/components/table-of-contents"

export default function BasicTOCExample() {
  // Example static TOC items
  const items = [
    {
      id: "introduction",
      title: "Introduction",
      level: 1
    },
    {
      id: "getting-started",
      title: "Getting Started",
      level: 1,
      children: [
        {
          id: "installation",
          title: "Installation",
          level: 2
        }
      ]
    }
  ]

  return (
    <div className="flex gap-6">
      <div className="w-64">
        <TableOfContents items={items} activeId="introduction" />
      </div>

      <div className="flex-1">
        <h1 id="introduction">Introduction</h1>
        <p>Some content here...</p>

        <h1 id="getting-started">Getting Started</h1>
        <p>More content here...</p>

        <h2 id="installation">Installation</h2>
        <p>Installation instructions...</p>
      </div>
    </div>
  )
} 