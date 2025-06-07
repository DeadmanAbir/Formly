"use client";
import { PartialBlock } from "@blocknote/core";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { FormHeader } from "./form-header";
import FormsOptions from "./forms-options";
import { cn } from "@/lib/utils";
import { CoverModal } from "./cover-modal";
import { LogoModal } from "./logo-modal";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Editor } from "./dynamic-editor";
import { insertFormFn } from "@/lib/tanstack-query/mutation";
import { useDebouncedCallback } from "use-debounce";
import PreviewForm from "./preview-form";
import { ArrowRight } from "lucide-react";
import { CustomPartialBlock } from "@/lib/types";

const EditDraftForm = ({
	formData,
	uuid,
}: {
	formData?: string;
	uuid: string;
}) => {
	const [draftSaved, setDraftSaved] = useState(false);
	const [showOptions, setShowOptions] = useState<boolean>(true);
	const [showPreview, setShowPreview] = useState<boolean>(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [showCoverModal, setShowCoverModal] = useState(false);
	const [showLogoModal, setShowLogoModal] = useState(false);

	const parsedData = formData ? JSON.parse(formData) : {};

	const [title, setTitle] = useState<string | undefined>(parsedData.title);
	const [initialContent, setInitialContent] = useState<
		CustomPartialBlock[] | undefined
	>(parsedData.content ? JSON.parse(parsedData.content) : undefined);
	const [buttonLabel, setButtonLabel] = useState<string>(
		parsedData.buttonLabel || "Submit"
	);
	const [bgColor, setBgColor] = useState<string>(
		parsedData.bgColor || "bg-white"
	);
	const [logoUrl, setLogoUrl] = useState<string | undefined>(
		parsedData.logoUrl
	);

	const { mutate: insertForm } = insertFormFn("access_token", {
		onSuccess: (data: any) => {
			console.log(data);
		},
		onError: (error: unknown) => {
			console.error(error);
		},
	});

	const debouncedFormUpdate = useDebouncedCallback(
		(formData: {
			content?: string;
			title?: string;
			buttonLabel: string;
			bgColor: string;
			logoUrl?: string;
		}) => {
			insertForm({
				data: {
					...formData,
					formId: uuid,
					published: parsedData.published ?? false,
				},
				userId: "ACgLHXgaM6EREKXBh8skDel9K3hqoJVi",
			});
			setDraftSaved(true);
			setTimeout(() => setDraftSaved(false), 2000);
		},
		5000
	);

	// Watch for changes in form fields and trigger update
	useEffect(() => {
		debouncedFormUpdate({
			content: initialContent ? JSON.stringify(initialContent) : undefined,
			title,
			buttonLabel,
			bgColor,
			logoUrl,
		});
	}, [
		title,
		buttonLabel,
		bgColor,
		logoUrl,
		initialContent,
		debouncedFormUpdate,
	]);

	const data = {
		content: JSON.stringify(initialContent),
		title: title,
		buttonLabel: buttonLabel,
		formId: uuid,
		bgColor: bgColor,
		logoUrl: logoUrl,
	};

	if (showPreview) {
		return (
			<PreviewForm showPreview={showPreview} setShowPreview={setShowPreview} />
		);
	}

	return (
		<div className="w-full py-6">
			<FormHeader
				data={data}
				userId={"ACgLHXgaM6EREKXBh8skDel9K3hqoJVi"}
				onPreview={() => setShowPreview(!showPreview)}
				onPublish={() => {}}
				draftSaved={draftSaved}
			/>

			{showOptions && !formData ? (
				<FormsOptions />
			) : (
				<div className="flex flex-col items-center justify-center h-screen space-y-4">
					<div className={cn("w-full flex-grow relative group", bgColor)}>
						<div className="absolute inset-0 flex items-center justify-center  opacity-0 group-hover:opacity-100 transition-opacity">
							{bgColor === "bg-white" ? (
								<Button
									variant="ghost"
									className="bg-white"
									onClick={() => setBgColor("bg-rose-100")}
								>
									Add cover
								</Button>
							) : (
								<Button
									variant="ghost"
									className="bg-white"
									onClick={() => setShowCoverModal(true)}
								>
									Change cover
								</Button>
							)}
							<CoverModal
								setBgColor={setBgColor}
								isOpen={showCoverModal}
								onClose={() => setShowCoverModal(false)}
							/>
							<LogoModal
								isOpen={showLogoModal}
								onClose={() => setShowLogoModal(false)}
								onUpload={setLogoUrl}
								onRemove={() => setLogoUrl("")}
							/>
						</div>
					</div>
					<div className="flex flex-row">
						{logoUrl ? (
							<Avatar
								className="h-16 w-16 cursor-pointer"
								onClick={() => setShowLogoModal(true)}
							>
								<AvatarImage src={logoUrl} />
								<AvatarFallback>Logo</AvatarFallback>
							</Avatar>
						) : (
							<Button
								variant="ghost"
								className="bg-white text-black px-4 py-2 rounded"
								onClick={() =>
									setLogoUrl(
										"https://avatars.githubusercontent.com/u/124599?v=4"
									)
								}
							>
								Add logo
							</Button>
						)}

						<Button
							variant="ghost"
							className="bg-white text-black px-4 py-2 rounded"
						>
							Customize
						</Button>
					</div>
					<form>
						<Input
							type="text"
							placeholder="Form title"
							value={title ?? ""}
							onChange={(e) => setTitle(e.target.value)}
							className="text-8xl font-extrabold w-full border-none focus:ring-0 focus:ring-offset-0 text-gray-400 "
						/>
					</form>
					<Editor
						setContent={setInitialContent}
						initialContent={initialContent}
						editable={true}
					/>
				</div>
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
};

export default EditDraftForm;
