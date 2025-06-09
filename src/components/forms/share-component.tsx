import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Check, Copy } from "lucide-react";
import Image from "next/image";

const ShareComponent = ({ placeholderUrl }: { placeholderUrl: string }) => {
	const [copied, setCopied] = useState(false);
	const handleCopy = () => {
		const inputValue = placeholderUrl;
		navigator.clipboard
			.writeText(inputValue)
			.then(() => {
				setCopied(true);
				setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
			})
			.catch((err) => {
				console.error("Could not copy text: ", err);
			});
	};

	return (
		<div className="flex flex-col w-full max-w-lg pl-4">
			<h1 className="text-xl font-bold ">Share Link</h1>
			<p className="text-gray-600 mb-2 text-sm font-normal  py-4">
				Your form is now published and ready to be shared with the world! Copy
				this link to share your form on social media, messaging apps or via
				email.
			</p>
			<div className="flex w-full">
				<Input
					value={placeholderUrl}
					readOnly
					className="w-full rounded-md focus"
				/>
				<Button
					onClick={handleCopy}
					className="ml-2 bg-black text-white hover:bg-zinc-800 flex gap-2 px-5"
				>
					{copied ? (
						<Check className="h-4 w-4" />
					) : (
						<Copy className="h-4 w-4" />
					)}
					Copy
				</Button>
			</div>
			<div className="py-10 space-y-2">
				<h2 className="font-bold text-lg ">Embed Form</h2>
				<p className="font-normal text-sm">
					Use these options to embed your form into your own website.
				</p>
				<Image
					src="/standard.jpg"
					alt="standard"
					width={150}
					height={150}
					className="rounded-md border border-solid border-gray-300"
				/>
				<p className="text-lg  font-bold">Standard</p>
				<Image
					src="/popup.jpg"
					alt="popup"
					width={150}
					height={150}
					className="rounded-md border border-solid border-gray-300"
				/>
				<p className="text-lg  font-bold">Popup</p>
				<Image
					src="/full-page.jpg"
					alt="full-page"
					width={150}
					height={150}
					className="rounded-md border border-solid border-gray-300"
				/>
				<p className="text-lg  font-bold">Full Page</p>
			</div>
		</div>
	);
};

export default ShareComponent;
