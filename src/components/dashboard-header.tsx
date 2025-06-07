"use client";
import { PanelRightClose, Search, Settings } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { usePathname } from "next/navigation";
import { useSidebar } from "./ui/sidebar";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
export const DashboardHeader = () => {
	const pathname = usePathname();
	const isEditPage = pathname.split("/").pop() === "edit";
	const { toggleSidebar, open } = useSidebar();
	if (isEditPage) {
		return null;
	}

	return (
		<div className="flex flex-row items-center justify-between h-10">
			<div className="flex items-center">
				{!open && (
					<div className="items-start">
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<Button
										variant="ghost"
										size="icon"
										className="cursor-pointer"
										onClick={toggleSidebar}
									>
										<PanelRightClose />
									</Button>
								</TooltipTrigger>
								<TooltipContent side="right">
									<p className="text-md">open sidebar</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</div>
				)}
			</div>

			<div className="flex items-center space-x-2">
				<Button variant="ghost" size="default" className="p-2 m-2 ">
					<Search />
					Search
				</Button>
				<Link href="/dashboard">
					<Settings size={20} className="mr-2" />
				</Link>
			</div>
		</div>
	);
};
