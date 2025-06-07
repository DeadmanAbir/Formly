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

export default function ShareForm({ show }: { show: boolean }) {
	const pathname = usePathname();

	const [url, setUrl] = useState("");

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

	return (
		<div className="flex justify-center items-center  ">
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
						<ShareComponent
							placeholderUrl={`${url}/r/${
								pathname.split("/").slice(-2, -1)[0]
							}`}
						/>
					</TabsContent>

					<TabsContent value="integrations" className="mt-8">
						<Integrations />
					</TabsContent>
					<TabsContent value="submissions" className="mt-8">
						<Submissions
							submissions={submissionData?.data}
							isPending={isPending}
						/>
					</TabsContent>
					<TabsContent value="summary" className="mt-8">
						<h1 className="text-2xl font-bold mb-8">Q&A Responses</h1>
						<QADisplay data={submissionData?.data} isPending={isPending} />
					</TabsContent>
					<TabsContent value="settings" className="mt-8">
						<FormSettings />
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
