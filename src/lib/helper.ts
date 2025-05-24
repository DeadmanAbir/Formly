import { v4 as uuidv4 } from "uuid";

export function generateUUIDSegment(length = 6) {
	return uuidv4().replace(/-/g, "").slice(0, length);
}

// Updated types to match the new structure
interface Submission {
	id: string;
	formId: string;
	content: string;
	submittedAt: string;
}

interface FormElement {
	id: string;
	type: string;
	props: {
		id?: string;
		title?: string;
		value?: string;
		inputType?: string;
		textAlignment?: string;
		textColor?: string;
		backgroundColor?: string;
	};
	content?: any[];
	children: any[];
}

interface ParsedQuestion {
	question: string;
	responses: { answer: string; submittedAt: string }[];
	icon: string;
}

export function parseSubmission(input: string): {
	question: string;
	responses: { answer: string; submittedAt: string }[];
	icon: string;
}[] {
	if (input === "") {
		return [];
	}

	try {
		const submissions: Submission[] = JSON.parse(input);

		const questionMap = new Map<string, ParsedQuestion>();

		submissions.forEach((submission) => {
			const formElements: FormElement[] = JSON.parse(submission.content);
			const submittedAt = submission.submittedAt;

			let currentHeaderId: string | undefined = undefined;
			let currentQuestion: string | undefined = undefined;

			formElements.forEach((element) => {
				if (element.type === "header" && element.props.title) {
					currentHeaderId = element.props.id;
					currentQuestion = element.props.title;

					// Initialize question in map if not exists
					if (!questionMap.has(currentHeaderId!)) {
						questionMap.set(currentHeaderId!, {
							question: currentQuestion,
							responses: [],
							icon: "",
						});
					}
				} else if (
					element.type === "input" &&
					element.props.value &&
					currentHeaderId
				) {
					// Found an input (answer) following a header
					const questionData = questionMap.get(currentHeaderId);
					if (questionData && element.props.value.trim() !== "") {
						// Add response with submittedAt timestamp
						questionData.responses.push({
							answer: element.props.value,
							submittedAt: submittedAt,
						});

						if (element.props.inputType && !questionData.icon) {
							questionData.icon = element.props.inputType;
						}
					}
				}
			});
		});

		return Array.from(questionMap.values());
	} catch (error) {
		console.error("Error parsing submission:", error);
		return [];
	}
}
