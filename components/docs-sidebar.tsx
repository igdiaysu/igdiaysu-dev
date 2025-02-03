"use client"
import * as React from "react"

import { SearchForm } from "@/components/search-form"
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"


export function DocsSidebar({ items }: { items: any }) {
  return (
    <Sidebar side="right">
      <SidebarHeader>
        <VersionSwitcher
          versions={items?.versions ?? []}
          defaultVersion={items?.versions?.[0]}
        />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {items.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items?.map((subItems) => (
                  <SidebarMenuItem key={subItems.title}>
                    <SidebarMenuButton asChild isActive={subItems.isActive}>
                      <a href={subItems.url}>
                        {subItems.icon && <subItems.icon />}{subItems.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}