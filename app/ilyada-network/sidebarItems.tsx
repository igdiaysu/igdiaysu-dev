"use client"
import {
  Home,
  Swords,
  Shovel
} from "lucide-react"


// Menu items.
export const sideTitle = [
  "İlyada Network"
];

export type NavItem = {
  title: string;
  icon?: React.ComponentType;
  items?: Array<{
    title: string;
    url: string;
    icon?: React.ComponentType;
    isActive?: boolean;
  }>;
}

export type Items = {
  versions: string[];
  navMain: NavItem[];
}

export const items: Items = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "İlyada Network",
      items: [
        {
          title: "PVP",
          url: "/ilyada-network/pvp",
          icon: Swords,
        },
        {
          title: "Claiming",
          url: "ilyada-network/claiming",
          icon: Shovel,
        },
      ],
    },
    {
      title: "Getting Started",
      items: [
        {
          title: "Installation",
          url: "#",
        },
        {
          title: "Project Structure",
          url: "#",
        },
      ],
    },
    {
      title: "Building Your Application",
      items: [
        {
          title: "Routing",
          url: "#",
        },
        {
          title: "Data Fetching",
          url: "#",
          isActive: true,
        },
      ],
    },
    {
      title: "API Reference",
      items: [
        {
          title: "Components",
          url: "#",
        },
        {
          title: "File Conventions",
          url: "#",
        },

      ],
    },
    {
      title: "Architecture",
    },
  ],
}


// export const sidebarItems = [
//   {
//     title: "İlyada Network",
//     url: "/ilyada-network",
//     children: [
//       {
//         title: "PVP",
//         url: "/ilyada-network/pvp",
//         icon: Swords,
//       },
//       {
//         title: "Claiming",
//         url: "ilyada-network/claiming",
//         icon: Shovel,
//       }
//     ]
//   }
// ]

// const colors = {
//   color: red,
// }