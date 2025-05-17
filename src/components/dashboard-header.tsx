"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { usePathname } from "next/navigation";
export const DashboardHeader = () => {
	const pathname = usePathname();
	const isEditPage = pathname.split("/").pop() === "edit";
	if (isEditPage) {
		return null;
	}

	return (
		<div className="flex flex-row gap-4 items-center justify-between">
			<Input placeholder="Enter text here" className="border p-2" />
			<Button variant="default" size="default">
				Submit
			</Button>
		</div>
	);
};
