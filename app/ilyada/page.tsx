"use client"

import {
  SidebarProvider,
  SidebarTrigger
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { sidebarItems } from "./sidebarItems"


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar items={sidebarItems} />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}