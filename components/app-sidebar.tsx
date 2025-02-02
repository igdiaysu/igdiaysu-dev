"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar"

// type SidebarItemsProp = {
//   title: string;
//   url: string;
//   icon: React.ComponentType;
//   children?: {
//     title: string;
//     url: string;
//     icon: React.ComponentType;
//   }
// }

export function AppSidebar({ items }: any) {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Docs</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {/* ? --> eğer veri yoksa hata verme */}
              {items?.map?.((item: any) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                  <SidebarMenuSub>
                    {item.children?.map((subItem: any) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild>
                          <a href={subItem.url}>
                            <subItem.icon />
                            <span>{subItem.title}</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
// export function AppSidebar({ items }: any) {
//   return (
//     <Sidebar>
//       <SidebarHeader />
//       <SidebarContent>
//         <SidebarGroup>
//           <SidebarGroupLabel>Docs</SidebarGroupLabel>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               {/* ? --> eğer veri yoksa hata verme */}
//               {items?.map?.((item: SidebarItemsProp) => (
//                 <SidebarMenuItem key={item.title}>
//                   <SidebarMenuButton asChild>
//                     <a href={item.url}>
//                       <item.icon />
//                       <span>{item.title}</span>
//                     </a>
//                   </SidebarMenuButton>
//                   <SidebarMenuSub>
//                     {items.children?.map?.((subItem: SidebarItemsProp) => (
//                       <SidebarMenuSubItem key={subItem.title}>
//                         <SidebarMenuSubButton asChild>
//                           <a href={subItem.url}>
//                             <subItem.icon />
//                             <span>{subItem.title}</span>
//                           </a>
//                         </SidebarMenuSubButton>
//                       </SidebarMenuSubItem>
//                     ))}
//                   </SidebarMenuSub>
//                 </SidebarMenuItem>
//               ))}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>
//       <SidebarFooter />
//     </Sidebar>
//   )
// }
