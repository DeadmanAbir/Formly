"use client";
import { en } from "@blocknote/core/locales";
import { codeBlock } from "@blocknote/code-block";
import {
	getDefaultReactSlashMenuItems,
	SuggestionMenuController,
	useCreateBlockNote,
} from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/shadcn/style.css";
import { useTheme } from "next-themes";
import * as Button from "@/components/ui/button";
import * as Input from "@/components/ui/input";
import { Dispatch, SetStateAction, useMemo } from "react";
import {
	BlockNoteSchema,
	defaultBlockSpecs,
	filterSuggestionItems,
	PartialBlock,
} from "@blocknote/core";
import { LinkBlock } from "../blocks/link-block";
import { QuestionBlock } from "../blocks/question-block";
import { Link } from "lucide-react";
import { CustomBlockNoteEditor, CustomPartialBlock, schema } from "@/lib/types";

interface EditorProps {
	setContent?: Dispatch<SetStateAction<CustomPartialBlock[] | undefined>>;
	initialContent?: CustomPartialBlock[];
	editable?: boolean;
	onContentChange?: (doc: CustomPartialBlock[] | undefined) => void;
}

const Editor = ({
	setContent,
	initialContent,
	editable = true,
	onContentChange,
}: EditorProps) => {
	const { resolvedTheme } = useTheme();

	// Memoize your options so that you're not recreating the object every render
	const options = useMemo(
		() => ({
			schema,
			codeBlock,
			initialContent,
			dictionary: {
				...en,
				placeholders: {
					...en.placeholders,
					emptyDocument: "Start typing…",
					default: "Type '/' to insert blocks",
					heading: "Custom heading placeholder",
				},
			},
		}),
		[initialContent, schema]
	);

	const editor = useCreateBlockNote(options);

	const getLinkSlashMenuItem = (editor: CustomBlockNoteEditor) => ({
		title: "Insert Link",
		onItemClick: () => {
			editor.insertBlocks(
				[
					{
						type: "question",
						props: {
							title: "",
						},
					},
					{
						type: "link",
						props: {
							url: "",
						},
					},
				],
				editor.getTextCursorPosition().block,
				"before"
			);
		},
		aliases: ["link", "url", "hyperlink"],
		group: "Questions",
		icon: <Link size={18} />,
		subtext: "Insert a custom link block",
	});

	// Combine default items with our custom item
	const getCustomSlashMenuItems = (editor: CustomBlockNoteEditor) => [
		getLinkSlashMenuItem(editor),
		...getDefaultReactSlashMenuItems(editor),
	];

	return (
		<BlockNoteView
			editable={editable}
			editor={editor}
			onChange={() => {
				setContent?.(editor.document);
				onContentChange?.(editor.document);
			}}
			theme={resolvedTheme === "dark" ? "dark" : "light"}
			shadCNComponents={{ Input, Button }}
		>
			{/* Add the slash menu controller */}
			<SuggestionMenuController
				triggerCharacter="/"
				getItems={async (query) =>
					filterSuggestionItems(getCustomSlashMenuItems(editor), query)
				}
			/>
		</BlockNoteView>
	);
};

export default Editor;
