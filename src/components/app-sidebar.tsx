"use client";
import {
	Calendar,
	Home,
	Inbox,
	PanelLeftClose,
	Search,
	Settings,
} from "lucide-react";

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

import Logout from "./auth/logout";
import { Button } from "./ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./ui/tooltip";

// Menu items.
const items = [
	{
		title: "Home",
		url: "/dashboard",
		icon: Home,
	},
	{
		title: "Inbox",
		url: "#",
		icon: Inbox,
	},
	{
		title: "Calendar",
		url: "#",
		icon: Calendar,
	},
	{
		title: "Search",
		url: "#",
		icon: Search,
	},
	{
		title: "Settings",
		url: "/settings",
		icon: Settings,
	},
];

export function AppSidebar() {
	const { toggleSidebar } = useSidebar();
	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<div className="flex items-center justify-between">
						<SidebarGroupLabel>Application</SidebarGroupLabel>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<Button
										variant="ghost"
										size="icon"
										className="cursor-pointer"
										onClick={toggleSidebar}
									>
										<PanelLeftClose />
									</Button>
								</TooltipTrigger>
								<TooltipContent side="right">
									<p className="text-md">close sidebar</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</div>
					<SidebarGroupContent>
						<SidebarMenu className="mt-2">
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
							<SidebarMenuButton asChild>
								<Logout />
							</SidebarMenuButton>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
