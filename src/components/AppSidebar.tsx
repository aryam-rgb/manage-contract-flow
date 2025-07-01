
import { useState } from "react";
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  BarChart3, 
  Settings,
  Plus
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Contracts", url: "/contracts", icon: FileText },
  { title: "Templates", url: "/templates", icon: FileText },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Admin", url: "/admin", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700" : "hover:bg-gray-50 text-gray-700";

  return (
    <Sidebar className={isCollapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-white border-r border-gray-200">
        <div className="p-4">
          <Button className="w-full bg-blue-600 hover:bg-blue-700" size={isCollapsed ? "icon" : "default"}>
            <Plus className="h-4 w-4" />
            {!isCollapsed && <span className="ml-2">New Contract</span>}
          </Button>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-500 text-xs uppercase tracking-wider px-4">
            {!isCollapsed && "Navigation"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="h-5 w-5" />
                      {!isCollapsed && <span className="ml-3">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
