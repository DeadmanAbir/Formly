import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { parseSubmissions } from "@/lib/helper";

interface FormSubmission {
	submittedAt: string;
	content: string;
}

interface ParsedSubmission {
	submittedAt: string;
	responses: Array<{
		question: string;
		response: string;
	}>;
}

interface SubmissionsProps {
	submissions: string;
}

export default function Submissions({ submissions }: SubmissionsProps) {
	const parsedData = JSON.parse(submissions || "[]");
	const submissionsList: ParsedSubmission[] = parsedData.map(
		(submission: FormSubmission) => ({
			submittedAt: submission.submittedAt,
			responses: parseSubmissions(submissions),
		})
	);

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
							{submissionsList.length} submissions
						</span>
					</span>
				</div>
			</div>

			<div className="rounded-md border">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Submitted at</TableHead>
							{submissionsList[0]?.responses.map(
								(item: { question: string }, index: number) => (
									<TableHead key={index}>{item.question}</TableHead>
								)
							)}
						</TableRow>
					</TableHeader>
					<TableBody>
						{submissionsList.map(
							(submission: ParsedSubmission, index: number) => (
								<TableRow key={index}>
									<TableCell className="font-medium">
										{new Date(submission.submittedAt).toLocaleString("en-US", {
											month: "long",
											day: "numeric",
											hour: "numeric",
											minute: "numeric",
											hour12: true,
										})}
									</TableCell>
									{submission.responses.map(
										(item: { response: string }, idx: number) => (
											<TableCell key={idx}>{item.response}</TableCell>
										)
									)}
								</TableRow>
							)
						)}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
