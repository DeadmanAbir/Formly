"use client";
import { PartialBlock } from "@blocknote/core";
import { useState } from "react";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FormHeader } from "./form-header";
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
import PreviewForm from "./preview-form";

const EditPublishedForm = ({ formData }: { formData: string }) => {
	const parsedData = JSON.parse(formData);
	const [title, setTitle] = useState<string>(parsedData.title ?? "Untitled");
	const [showPreview, setShowPreview] = useState<boolean>(false);
	const [initialContent, setInitialContent] = useState<
		PartialBlock[] | undefined
	>(JSON.parse(parsedData.content));
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [buttonLabel, setButtonLabel] = useState(parsedData.buttonLabel);
	const [bgColor, setBgColor] = useState(parsedData.bgColor);
	const [showCoverModal, setShowCoverModal] = useState(false);
	const [showLogoModal, setShowLogoModal] = useState(false);
	const [logoUrl, setLogoUrl] = useState(parsedData.logoUrl);

	const data = {
		content: JSON.stringify(initialContent),
		title: title,
		buttonLabel: buttonLabel,
		formId: parsedData.formId,
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
				userId={"6e51e3e4-8412-4126-97e1-f35176169a11"}
				onPreview={() => setShowPreview(!showPreview)}
				onPublish={() => {}}
			/>

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
								setLogoUrl("https://avatars.githubusercontent.com/u/124599?v=4")
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
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className="text-4xl font-light w-full border-none focus:outline-none focus:ring-0 text-gray-400 placeholder:text-gray-400"
					/>
				</form>
				<Editor
					setContent={setInitialContent}
					initialContent={initialContent}
					editable={true}
				/>
			</div>
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

export default EditPublishedForm;
