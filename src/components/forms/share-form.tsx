"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { notFound, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Integrations from "./integrations";
import { getSubmissionsQuery } from "@/lib/tanstack-query/query";
import QADisplay from "./qa-display";
import ShareComponent from "./share-component";
import { FormSettings } from "./form-settings";
import { Submissions } from "./submissions";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Check, Link, PencilLine } from "lucide-react";
import { handleCopy } from "@/lib/helper";

export default function ShareForm({
	show,
	data,
}: {
	show: boolean;
	data?: string;
}) {
	const pathname = usePathname();
	const [value, setValue] = useState<string>("share");
	const [url, setUrl] = useState("");
	const [copied, setCopied] = useState(false);
	useEffect(() => {
		if (typeof window !== "undefined") {
			setUrl(window.location.origin);
		}
	}, []);

	const { data: submissionData, isPending } = getSubmissionsQuery(
		pathname.split("/").slice(-2, -1)[0]
	);

	if (!show) {
		notFound();
	}
	const parsedData = JSON.parse(data!);
	const shareUrl = `${url}/r/${pathname.split("/").slice(-2, -1)[0]}`;

	return (
		<div className={`flex flex-col min-h-[calc(100vh-40px)] pt-10 `}>
			<div className=" flex flex-row justify-between px-4 pb-4">
				<h1 className="text-3xl font-extrabold ">
					{parsedData.title ?? "Untitled"}
				</h1>
				<div className="flex gap-4">
					<Button
						variant="ghost"
						className="p-2"
						onClick={() => handleCopy(shareUrl, setCopied)}
					>
						{copied ? (
							<Check className="h-4 w-4" />
						) : (
							<Link className="cursor-pointer" />
						)}
					</Button>

					<Button className="bg-blue-600">
						<PencilLine />
						Edit
					</Button>
				</div>
			</div>
			<Tabs
				// defaultValue="summary"
				className="flex flex-col flex-1 w-full h-full "
				onValueChange={setValue}
				value={value}
			>
				<TabsList className="w-full flex  bg-transparent p-0 m-0 max-w-lg ">
					<TabsTrigger
						value="summary"
						className="  flex-1 text-sm font-medium px-0 py-2 rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:font-bold data-[state=active]:text-black data-[state=active]:shadow-none "
					>
						Summary
					</TabsTrigger>
					<TabsTrigger
						value="submissions"
						className="  flex-1 text-sm font-medium px-0 py-2 rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:font-bold data-[state=active]:text-black data-[state=active]:shadow-none "
					>
						Submissions
					</TabsTrigger>
					<TabsTrigger
						value="share"
						className="  flex-1 text-sm font-medium px-0 py-2 rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:font-bold data-[state=active]:text-black data-[state=active]:shadow-none "
					>
						Share
					</TabsTrigger>
					<TabsTrigger
						value="integrations"
						className="  flex-1 text-sm font-medium px-0 py-2 rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:font-bold data-[state=active]:text-black data-[state=active]:shadow-none "
					>
						Integrations
					</TabsTrigger>
					<TabsTrigger
						value="settings"
						className="  flex-1 text-sm font-medium px-0 py-2 rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:font-bold data-[state=active]:text-black data-[state=active]:shadow-none "
					>
						Settings
					</TabsTrigger>
				</TabsList>
				<Separator />
				<TabsContent value="share" className="mt-8">
					<ShareComponent placeholderUrl={shareUrl} />
				</TabsContent>
				<TabsContent value="integrations" className="mt-8">
					<Integrations />
				</TabsContent>
				<TabsContent value="submissions" className="flex flex-col flex-1 ">
					<Submissions
						submissions={submissionData?.data}
						isPending={isPending}
						changeTab={setValue}
					/>
				</TabsContent>
				<TabsContent value="summary" className="flex flex-col flex-1">
					<QADisplay
						data={submissionData?.data}
						isPending={isPending}
						changeTab={setValue}
						className="flex-1 flex items-center justify-center"
					/>
				</TabsContent>
				<TabsContent value="settings">
					<FormSettings />
				</TabsContent>
			</Tabs>
		</div>
	);
}
