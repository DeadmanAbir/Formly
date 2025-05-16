"use client";
import { Editor } from "@/components/forms/dynamic-editor";
import FormsOptions from "@/components/forms/forms-options";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { loadFromStorage, saveToStorage } from "@/lib/helper";
import { Block, PartialBlock } from "@blocknote/core";
import { useState, useEffect } from "react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { insertFormFn } from "@/lib/tanstack-query/mutation";
import { FormHeader } from "@/components/forms/form-header";

type Props = {
	params: {
		slug: string;
	};
};

export default function FormPage({ params }: Props) {
	const [showOptions, setShowOptions] = useState<boolean>(false);
	const [showPreview, setShowPreview] = useState<boolean>(false);
	const [initialContent, setInitialContent] = useState<
		PartialBlock[] | undefined
	>(undefined);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [buttonLabel, setButtonLabel] = useState("Submit");

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

	useEffect(() => {
		const content = loadFromStorage();
		console.log("content", content);
		setInitialContent(content);
	}, []);

	const handleHeaderSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!showOptions) {
			console.log(initialContent);
			alert("check console");
			saveToStorage(JSON.stringify(initialContent));
		} else {
			alert("Form title saved");
			setShowOptions(!showOptions);
		}
	};

	if (showPreview) {
		return (
			<div>
				<div className="flex flex-col h-screen">
					<div className="flex justify-end p-4">
						<Button
							variant="ghost"
							className="text-sm"
							onClick={() => setShowPreview(!showPreview)}
						>
							<span>
								<ArrowLeft />
							</span>
							Back to editor
						</Button>
					</div>
					<div className="flex flex-1 items-center justify-center">
						<h1>This is the preview page</h1>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="container max-w-3xl py-6">
			<FormHeader
				content={JSON.stringify(initialContent)}
				userId={"6e51e3e4-8412-4126-97e1-f35176169a11"}
				onPreview={() => setShowPreview(!showPreview)}
				onPublish={() => {}}
			/>
			<div className="flex flex-col space-y-8">
				{/* Form Title Input */}
				<div className="border-l-4 border-gray-200 pl-6">
					<form onSubmit={handleHeaderSubmit}>
						<input
							type="text"
							placeholder="Form title"
							className="text-4xl font-light w-full border-none focus:outline-none focus:ring-0 text-gray-400 placeholder:text-gray-400"
						/>
					</form>
					<Button
						variant="ghost"
						className="mt-2"
						onClick={() =>
							insertForm({
								content: JSON.stringify(initialContent),
								userId: "6e51e3e4-8412-4126-97e1-f35176169a11",
							})
						}
					>
						Save to draft
					</Button>
				</div>
			</div>
			{showOptions ? (
				<FormsOptions />
			) : (
				<Editor
					setContent={setInitialContent}
					initialContent={initialContent}
					editable={true}
				/>
			)}
			<Button
				variant="default"
				className="mt-2"
				onClick={() => setIsModalOpen(true)}
			>
				{buttonLabel}
				<span>
					<ArrowRight />
				</span>
			</Button>

			<Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Change Button Label</DialogTitle>
						<DialogDescription>
							Enter a new label for the submit button
						</DialogDescription>
					</DialogHeader>

					<form
						onSubmit={(e) => {
							e.preventDefault();
							setIsModalOpen(false);
						}}
					>
						<Input
							value={buttonLabel}
							onChange={(e) => setButtonLabel(e.target.value)}
							placeholder="Enter button label"
							className="my-4"
						/>
					</form>
				</DialogContent>
			</Dialog>
		</div>
	);
}
