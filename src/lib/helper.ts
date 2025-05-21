import { LucideIcon } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

export function generateUUIDSegment(length = 6) {
	return uuidv4().replace(/-/g, "").slice(0, length);
}

export const parseSubmissions = (
	submissions: string
): {
	question: string;
	response: string;
	icon: string;
}[] => {
	if (submissions === "") {
		return [];
	}
	const parsedData = JSON.parse(submissions);
	let parsedSubmissions: {
		question: string;
		response: string;
		icon: string;
	}[] = [];
	for (let i = 0; i < parsedData.length; i++) {
		const content = JSON.parse(parsedData[i].content);
		for (let j = 0; j < content.length; j++) {
			if (content[j].type === "header") {
				parsedSubmissions.push({
					question: content[j].props.title,
					response: content[j + 1].props.value,
					icon: content[j + 1].props.inputType,
				});
				j++;
			}
		}
	}
	return parsedSubmissions;
};
