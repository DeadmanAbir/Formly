import { v4 as uuidv4 } from "uuid";

interface Submission {
	id: string;
	formId: string;
	content: string; // JSON string containing FormElement[]
	submittedAt: string;
}

// Output type
interface ParsedQuestion {
	question: string;
	responses: string[];
	icon: string;
}

interface FormElement {
	id: string;
	type: string;
	props: {
		id: string;
		title?: string;
		value?: string;
		textAlignment?: string;
		inputType?: string;
		textColor?: string;
		backgroundColor?: string;
	};
	content?: any[];
	children: any[];
}

export function generateUUIDSegment(length = 6) {
	return uuidv4().replace(/-/g, "").slice(0, length);
}

export function parseSubmission(input: string): {
	question: string;
	responses: string[];
	icon: string;
}[] {
	try {
		const submissions: Submission[] = JSON.parse(input);

		const questionMap = new Map<string, ParsedQuestion>();

		submissions.forEach((submission) => {
			const formElements: FormElement[] = JSON.parse(submission.content);

			let currentHeaderId: string | null = null;
			let currentQuestion: string | null = null;

			formElements.forEach((element) => {
				if (element.type === "header" && element.props.title) {
					currentHeaderId = element.props.id;
					currentQuestion = element.props.title;

					// Initialize question in map if not exists
					if (!questionMap.has(currentHeaderId)) {
						questionMap.set(currentHeaderId, {
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
						// Add response if it's not empty and not already present
						if (!questionData.responses.includes(element.props.value)) {
							questionData.responses.push(element.props.value);
						}
						// Set icon from inputType
						if (element.props.inputType && !questionData.icon) {
							questionData.icon = element.props.inputType;
						}
					}
				}
			});
		});

		// Convert map to array
		return Array.from(questionMap.values());
	} catch (error) {
		console.error("Error parsing submission:", error);
		return [];
	}
}
