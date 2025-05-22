"use client";

import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { parseSubmission } from "@/lib/helper";

type Response = {
	text: string;
	timestamp: Date;
};

type QAItem = {
	question: string;
	responses: Response[];
};

type QADisplayProps = {
	data: string;
	isPending: boolean;
};

export default function QADisplay({ data, isPending }: QADisplayProps) {
	if (isPending) {
		return <div>Loading...</div>;
	}
	// const [expandedQuestions, setExpandedQuestions] = useState<
	// 	Record<number, boolean>
	// >(Object.fromEntries(data.map((_, index) => [index, true])));

	const submissonData = parseSubmission(isPending ? "" : data);
	console.log(submissonData);
	const formatCurrentTimestamp = () => {
		const now = new Date();
		return now.toLocaleString("en-US", {
			month: "short",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
			hour12: true,
		});
	};

	return (
		<div className="space-y-8">
			{submissonData.map((item, index) => (
				<div key={index} className="border-b pb-6">
					<div className="flex justify-between items-center cursor-pointer">
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
								<p>{response}</p>
								<span className="text-gray-500 text-sm whitespace-nowrap ml-4">
									{formatCurrentTimestamp()}
								</span>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
