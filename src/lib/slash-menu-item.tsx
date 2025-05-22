import { AlignJustify, AtSign, Hash, Layers2, Link, Phone } from "lucide-react";
import { CustomBlockNoteEditor } from "@/lib/types";
import { generateUUIDSegment } from "./helper";

// Function to create a header + input block combination
const createQuestionBlock = (
	editor: CustomBlockNoteEditor,
	inputType: "number" | "email" | "phone" | "link" | "short" | "long"
) => {
	editor.insertBlocks(
		[
			{
				type: "header",
				props: {
					title: "",
					id: generateUUIDSegment(),
				},
			},
			{
				type: "input",
				props: {
					value: "",
					inputType,
				},
			},
		],
		editor.getTextCursorPosition().block,
		"before"
	);
};

export const getLongAnswerSlashMenuItem = (editor: CustomBlockNoteEditor) => ({
	title: "Long Answer",
	onItemClick: () => createQuestionBlock(editor, "long"),
	group: "Questions",
	icon: <AlignJustify size={18} />,
});

export const getShortAnswerSlashMenuItem = (editor: CustomBlockNoteEditor) => ({
	title: "Short Answer",
	onItemClick: () => createQuestionBlock(editor, "short"),
	group: "Questions",
	icon: <Layers2 size={18} />,
});

export const getNumberSlashMenuItem = (editor: CustomBlockNoteEditor) => ({
	title: "Number",
	onItemClick: () => createQuestionBlock(editor, "number"),
	group: "Questions",
	icon: <Hash size={18} />,
});

export const getEmailSlashMenuItem = (editor: CustomBlockNoteEditor) => ({
	title: "Email",
	onItemClick: () => createQuestionBlock(editor, "email"),
	group: "Questions",
	icon: <AtSign size={18} />,
});

export const getPhoneNumberSlashMenuItem = (editor: CustomBlockNoteEditor) => ({
	title: "Phone Number",
	onItemClick: () => createQuestionBlock(editor, "phone"),
	group: "Questions",
	icon: <Phone size={18} />,
});

export const getLinkSlashMenuItem = (editor: CustomBlockNoteEditor) => ({
	title: "Link",
	onItemClick: () => createQuestionBlock(editor, "link"),
	group: "Questions",
	icon: <Link size={18} />,
});

// Helper function to get all custom slash menu items
export const getAllCustomSlashMenuItems = (editor: CustomBlockNoteEditor) => [
	getLongAnswerSlashMenuItem(editor),
	getShortAnswerSlashMenuItem(editor),
	getNumberSlashMenuItem(editor),
	getEmailSlashMenuItem(editor),
	getPhoneNumberSlashMenuItem(editor),
	getLinkSlashMenuItem(editor),
];
