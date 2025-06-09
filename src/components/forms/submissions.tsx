import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { parseSubmission } from "@/lib/helper";
import { inputTypeIcons } from "../blocks/input-block";
import { Package2 } from "lucide-react";
import { Button } from "../ui/button";

interface FormSubmission {
	submittedAt: string;
	content: string;
}

interface ParsedSubmission {
	submittedAt: string;
	responses: Array<{
		question: string;
		response: string;
		icon: string;
	}>;
}

interface SubmissionsProps {
	submissions: string;
	isPending: boolean;
	changeTab: (value: string) => void;
}

export const Submissions = ({
	submissions,
	isPending,
	changeTab,
}: SubmissionsProps) => {
	if (isPending) return <div>Loading...</div>;

	const questions = parseSubmission(isPending ? "" : submissions ?? "");

	const allSubmissions: string[] = [];

	try {
		const rawSubmissions = JSON.parse(submissions || "[]");
		rawSubmissions.forEach((submission: any) => {
			if (submission.submittedAt) {
				allSubmissions.push(submission.submittedAt);
			}
		});
	} catch {
		questions.forEach((question) => {
			question.responses.forEach((response) => {
				if (!allSubmissions.includes(response.submittedAt)) {
					allSubmissions.push(response.submittedAt);
				}
			});
		});
	}

	const sortedSubmissions = allSubmissions.sort(
		(a, b) => new Date(b).getTime() - new Date(a).getTime()
	);

	if (sortedSubmissions.length === 0) {
		return (
			<div className="flex flex-1 h-full  flex-col items-center justify-center py-10">
				<Package2 size={60} className="text-gray-300" />
				<div className="flex flex-col items-center justify-center py-10 space-y-4">
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
		<div className="space-y-4">
			<div className="flex items-center justify-between">
				<div>
					<h2 className="text-2xl font-bold tracking-tight">Submissions</h2>
					<p className="text-muted-foreground">
						Here&apos;s a list of all form submissions
					</p>
				</div>
				<div className="flex items-center space-x-2">
					<span className="flex items-center space-x-1">
						<span className="text-sm text-muted-foreground">
							{sortedSubmissions.length} submissions
						</span>
					</span>
				</div>
			</div>
			<div className="rounded-md border">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="border-r">Submitted at</TableHead>
							{questions.map((item, index) => {
								const IconComponent =
									inputTypeIcons[item.icon as string] || undefined;
								return (
									<TableHead
										key={index}
										className={index < questions.length - 1 ? "border-r" : ""}
									>
										<div className="flex items-center gap-1">
											{IconComponent && <IconComponent size={18} />}
											<span>{item.question}</span>
										</div>
									</TableHead>
								);
							})}
						</TableRow>
					</TableHeader>
					<TableBody>
						{sortedSubmissions.map((submissionTime, rowIndex) => (
							<TableRow key={rowIndex}>
								<TableCell className="font-medium border-r">
									{new Date(submissionTime).toLocaleString("en-US", {
										month: "long",
										day: "numeric",
										hour: "numeric",
										minute: "numeric",
										hour12: true,
									})}
								</TableCell>
								{questions.map((question, colIndex) => {
									const responseIndex =
										sortedSubmissions
											.slice(0, rowIndex + 1)
											.filter((time) => time === submissionTime).length - 1;
									const responsesAtThisTime = question.responses.filter(
										(r) => r.submittedAt === submissionTime
									);
									const response =
										responsesAtThisTime[responseIndex] ||
										responsesAtThisTime[0];

									return (
										<TableCell
											key={colIndex}
											className={
												colIndex < questions.length - 1 ? "border-r" : ""
											}
										>
											{response ? response.answer : "-"}
										</TableCell>
									);
								})}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	);
};
