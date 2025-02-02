import { Home } from "lucide-react"

// Menu items.
export const sidebarItems = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
    children: [
      {
        title: "Analytics",
        url: "/analytics",
        icon: Home,
      },
      {
        title: "Overview",
        url: "/overview",
        icon: Home,
      }
    ]
  },
  {
    title: "Ayarlar",
    url: "/settings",
    icon: Home,
  }
]

// const colors = {
//   color: red,
// }