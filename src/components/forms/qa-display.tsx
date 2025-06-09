"use client";

import { parseSubmission } from "@/lib/helper";
import { Package2 } from "lucide-react";
import { Button } from "../ui/button";

type QAResponse = {
	answer: string;
	submittedAt: string;
};

type QAItem = {
	question: string;
	responses: QAResponse[];
	icon: string;
};

type QADisplayProps = {
	data: string;
	isPending: boolean;
	changeTab: (value: string) => void;
};

export default function QADisplay({
	data,
	isPending,
	changeTab,
	className = "",
}: QADisplayProps & { className?: string }) {
	if (isPending) {
		return <div>Loading...</div>;
	}

	const submissonData: QAItem[] = parseSubmission(isPending ? "" : data);

	if (submissonData.length === 0) {
		return (
			<div
				className={`flex flex-col items-center justify-center py-10 h-full ${className}`}
			>
				<Package2 size={60} className="text-gray-300" />
				<div className="flex flex-col items-center justify-center  py-10 space-y-4">
					<p className="text-black font-bold text-lg">
						No completed submissions yet
					</p>
					<p className="text-gray-400 ">
						Your form is published and ready to be shared with the world!
					</p>
					<Button
						variant="default"
						className="bg-blue-600 hover:bg-blue-700"
						onClick={() => {
							changeTab("share");
						}}
					>
						Share
					</Button>
				</div>
			</div>
		);
	}

	return (
		<div className={`space-y-8 h-full ${className}`}>
			{submissonData.map((item, index) => (
				<div key={index} className="border-b pb-6">
					<div className="flex justify-between items-center ">
						<div>
							<h2 className="text-xl font-bold">{item.question}</h2>
							<p className="text-gray-500">{item.responses.length} responses</p>
						</div>
					</div>

					<div className="mt-4 space-y-4">
						{item.responses.map((response, responseIndex) => (
							<div
								key={responseIndex}
								className="flex justify-between items-start py-2"
							>
								<p>{response.answer}</p>
								<span className="text-gray-500 text-sm whitespace-nowrap ml-4">
									{new Date(response.submittedAt).toLocaleString("en-US", {
										month: "short",
										day: "numeric",
										hour: "numeric",
										minute: "numeric",
										hour12: true,
									})}
								</span>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
