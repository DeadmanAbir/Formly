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
}

export default function Submissions({
	submissions,
	isPending,
}: SubmissionsProps) {
	if (isPending) return <div>Loading...</div>;

	const questions = parseSubmission(isPending ? "" : submissions ?? "");

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
							{(() => {
								try {
									const parsedData = JSON.parse(submissions || "[]");
									return parsedData.length;
								} catch {
									return 0;
								}
							})()}{" "}
							submissions
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
						{(() => {
							let parsedData = [];
							try {
								parsedData = JSON.parse(submissions || "[]");
							} catch {}
							return parsedData.map((submission: any, respIdx: number) => {
								// For each submission, parse its content and align answers with questions
								let answers: string[] = [];
								try {
									const formElements = JSON.parse(submission.content || "[]");
									// For each question, find the corresponding input value in this submission
									answers = questions.map((q) => {
										// Find the input element with a value following the header with matching id
										let found = "-";
										let headerIdx = formElements.findIndex(
											(el: any) =>
												el.type === "header" && el.props.title === q.question
										);
										if (headerIdx !== -1) {
											// Look for the next input after this header
											for (
												let i = headerIdx + 1;
												i < formElements.length;
												i++
											) {
												if (
													formElements[i].type === "input" &&
													formElements[i].props.value
												) {
													found = formElements[i].props.value;
													break;
												}
											}
										}
										return found;
									});
								} catch {}
								return (
									<TableRow key={respIdx}>
										<TableCell className="font-medium border-r">
											{submission.submittedAt
												? new Date(submission.submittedAt).toLocaleString(
														"en-US",
														{
															month: "long",
															day: "numeric",
															hour: "numeric",
															minute: "numeric",
															hour12: true,
														}
												  )
												: ""}
										</TableCell>
										{answers.map((ans, idx) => (
											<TableCell
												key={idx}
												className={idx < answers.length - 1 ? "border-r" : ""}
											>
												{ans}
											</TableCell>
										))}
									</TableRow>
								);
							});
						})()}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
