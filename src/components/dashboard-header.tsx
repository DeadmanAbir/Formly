"use client";
import { ListCollapse } from "lucide-react";
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
export const DashboardHeader = () => {
	const pathname = usePathname();
	const isEditPage = pathname.split("/").pop() === "edit";
	const { toggleSidebar, open } = useSidebar();
	if (isEditPage) {
		return null;
	}

	return (
		<div className="flex flex-row gap-4 items-center justify-between">
			{!open && (
				<>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									className="cursor-pointer"
									onClick={toggleSidebar}
								>
									<ListCollapse />
								</Button>
							</TooltipTrigger>
							<TooltipContent side="right">
								<p className="text-md">close sidebar</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</>
			)}
			<Input placeholder="Enter text here" className="border p-2" />
			<Button variant="default" size="default">
				Submit
			</Button>
		</div>
	);
};
