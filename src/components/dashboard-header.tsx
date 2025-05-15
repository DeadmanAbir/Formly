"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { insertFormFn } from "@/lib/tanstack-query/mutation";

export const DashboardHeader = () => {
	const { mutate: insertForm, isPending: isInserting } = insertFormFn(
		"access_token",
		{
			onSuccess: (data: any) => {
				console.log(data);
			},
			onError: (error: unknown) => {
				console.error(error);
			},
		}
	);

	return (
		<div className="flex flex-row gap-4 items-center justify-between">
			<Input placeholder="Enter text here" className="border p-2" />
			<Button variant="default" size="default">
				Submit
			</Button>
			<Button
				variant="default"
				size="default"
				className="bg-blue-500  hover:bg-blue-600"
			>
				Publish
			</Button>
		</div>
	);
};
