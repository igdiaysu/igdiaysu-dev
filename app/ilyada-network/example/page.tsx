import { TableOfContents, type TOCItem } from "@/components/table-of-contents"

const ExampleUsage = () => {
  // You can generate this structure from your markdown/mdx headings
  const tocItems: TOCItem[] = [
    {
      id: "getting-started",
      title: "Getting Started",
      level: 1,
      children: [
        {
          id: "installation",
          title: "Installation",
          level: 2,
        },
        {
          id: "configuration",
          title: "Configuration",
          level: 2,
        },
      ],
    },
    {
      id: "features",
      title: "Features",
      level: 1,
      children: [
        {
          id: "authentication",
          title: "Authentication",
          level: 2,
          children: [
            {
              id: "oauth",
              title: "OAuth Setup",
              level: 3,
            },
          ],
        },
      ],
    },
  ]

  // This could be managed by an IntersectionObserver to highlight
  // the current section in view
  const activeId = "installation"

  return (
    <div className="w-64">
      <TableOfContents items={tocItems} activeId={activeId} />
    </div>
  )
}

export default ExampleUsage 