"use client"
import { Items } from "@/components/app-sidebar-types";
import {
  Swords,
  Shovel,
  Sprout,
  BookOpen,
  LaptopMinimal,
  BookMarked
} from "lucide-react"


// Menu items.
export const sideTitle = [
  "İlyada Network"
];

export const items: Items = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "İlyada Network",
      items: [
        {
          title: "Hakkında",
          url: "#",
          icon: BookOpen,
          isActive: true,
        },
        {
          title: "Server Kuralları",
          url: "/ilyada-network/kurallar",
          icon: BookMarked,
        },
        {
          title: "Discord",
          url: "/ilyada-network/discord",
          icon: LaptopMinimal,
        },
      ],
    },
    {
      title: "Oyun Modu",
      items: [
        {
          title: "PVP & PVP",
          url: "/ilyada-network/oyun-modu",
          icon: BookOpen,
        },
        {
          title: "PVE Detayları",
          url: "/ilyada-network/pve",
          icon: Sprout,
        },
        {
          title: "PVP Detayları",
          url: "/ilyada-network/pvp",
          icon: Swords,
        },
      ],
    },
    {
      title: "Claim - Arazi Sahiplenme",
      items: [
        {
          title: "Claim Hakkında",
          url: "/ilyada-network/claim-hakkinda",
          icon: BookOpen,
        },
        {
          title: "Claim Alma",
          url: "/ilyada-network/claim-alma",
          icon: Shovel,
        },
      ],
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