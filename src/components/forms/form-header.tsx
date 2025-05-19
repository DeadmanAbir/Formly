"use client";

import { Button } from "@/components/ui/button";
import { saveToStorage } from "@/lib/helper";
import { insertFormFn } from "@/lib/tanstack-query/mutation";
import { Settings } from "lucide-react";

interface FormHeaderProps {
	userId: string;
	onPreview?: () => void;
	onPublish?: () => void;
	data: {
		content: string;
		title?: string;
		buttonLabel: string;
		formId: string;
		bgColor: string;
		logoUrl?: string;
	};
}

export function FormHeader({
	data,
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
				<Button
					variant="ghost"
					className="text-sm text-muted-foreground"
					onClick={() => {
						alert("check console");
						saveToStorage(data.content);
					}}
				>
					Draft
				</Button>
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
					onClick={() =>
						insertForm({
							data: {
								content: data.content,
								title: data.title,
								buttonLabel: data.buttonLabel,
								formId: data.formId,
								bgColor: data.bgColor,
								logoUrl: data.logoUrl,
								published: true,
							},
							userId,
						})
					}
				>
					Publish
				</Button>
			</div>
		</div>
	);
}
