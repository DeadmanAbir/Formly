"use client";

import { parseSubmission } from "@/lib/helper";

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
};

export default function QADisplay({ data, isPending }: QADisplayProps) {
	if (isPending) {
		return <div>Loading...</div>;
	}

	const submissonData: QAItem[] = parseSubmission(isPending ? "" : data);

	return (
		<div className="space-y-8 h-full">
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
