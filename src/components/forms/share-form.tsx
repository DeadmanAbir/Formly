"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Copy } from "lucide-react";
import { notFound, usePathname } from "next/navigation";
import { useState } from "react";
import Integrations from "./integrations";

export default function ShareForm({ show }: { show: boolean }) {
	const pathname = usePathname();
	const [copied, setCopied] = useState(false);
	const url = window.location.origin;

	const handleCopy = () => {
		const inputValue = `${url}/r/${pathname.split("/").slice(-2, -1)[0]}`;
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
	if (!show) {
		notFound();
	}
	return (
		<div className="flex justify-center items-center h-screen ">
			<div className="container max-w-6xl pt-10">
				<Tabs defaultValue="share" className="w-full">
					<TabsList className="w-full max-w-[600px] grid grid-cols-5">
						<TabsTrigger value="summary">Summary</TabsTrigger>
						<TabsTrigger value="submissions">Submissions</TabsTrigger>
						<TabsTrigger value="share">Share</TabsTrigger>
						<TabsTrigger value="integrations">Integrations</TabsTrigger>
						<TabsTrigger value="settings">Settings</TabsTrigger>
					</TabsList>

					<TabsContent value="share" className="mt-8">
						<div className="max-w-2xl mx-auto">
							<h1 className="text-2xl font-semibold mb-4">Share Link</h1>
							<p className="text-gray-600 mb-8">
								Your form is now published and ready to be shared with the
								world! Copy this link to share your form on social media,
								messaging apps or via email.
							</p>

							<div className="flex gap-2">
								<Input
									value={`${url}/r/${pathname.split("/").slice(-2, -1)[0]}`}
									readOnly
									className="flex-1"
								/>
								<Button
									variant="default"
									className="flex gap-2"
									onClick={handleCopy}
								>
									{copied ? (
										<Check className="h-4 w-4" />
									) : (
										<Copy className="h-4 w-4" />
									)}
									{copied ? "Copied" : "Copy"}
								</Button>
							</div>

							<Button
								variant="link"
								className="mt-4 text-gray-600 hover:text-gray-900"
							>
								Use custom domain
							</Button>
						</div>
					</TabsContent>

					<TabsContent value="integrations" className="mt-8">
						<Integrations />
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
