import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Check, Copy } from "lucide-react";

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
		<div className="max-w-2xl">
			<h1 className="text-2xl font-semibold mb-4">Share Link</h1>
			<p className="text-gray-600 mb-8">
				Your form is now published and ready to be shared with the world! Copy
				this link to share your form on social media, messaging apps or via
				email.
			</p>

			<div className="flex gap-2">
				<Input value={placeholderUrl} readOnly className="flex-1" />
				<Button variant="default" className="flex gap-2" onClick={handleCopy}>
					{copied ? (
						<Check className="h-4 w-4" />
					) : (
						<Copy className="h-4 w-4" />
					)}
					{copied ? "Copied" : "Copy"}
				</Button>
			</div>

			<Button variant="link" className="mt-4 text-gray-600 hover:text-gray-900">
				Use custom domain
			</Button>
		</div>
	);
};

export default ShareComponent;
