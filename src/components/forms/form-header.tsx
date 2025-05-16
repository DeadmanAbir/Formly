"use client";

import { Button } from "@/components/ui/button";
import { insertFormFn } from "@/lib/tanstack-query/mutation";
import { Settings } from "lucide-react";

interface FormHeaderProps {
	content: string;
	userId: string;
	onPreview?: () => void;
	onPublish?: () => void;
}

export function FormHeader({
	content,
	userId,
	onPreview,
	onPublish,
}: FormHeaderProps) {
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
		<div className="flex items-center justify-between border-b pb-4">
			<div className="flex items-center gap-4">
				<span className="text-sm text-muted-foreground">Draft</span>
				<Button variant="ghost" size="icon" className="h-8 w-8">
					<Settings className="h-4 w-4" />
				</Button>
			</div>
			<div className="flex items-center gap-2">
				<Button variant="ghost" className="text-sm" onClick={onPublish}>
					Customize
				</Button>
				<Button variant="ghost" className="text-sm" onClick={onPreview}>
					Preview
				</Button>
				<Button
					variant="default"
					className="bg-blue-600 text-sm"
					onClick={() => insertForm({ content, userId })}
				>
					Publish
				</Button>
			</div>
		</div>
	);
}
