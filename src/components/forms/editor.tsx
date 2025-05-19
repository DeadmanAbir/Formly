"use client";
import { en } from "@blocknote/core/locales";
import { codeBlock } from "@blocknote/code-block";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/shadcn/style.css";
import { useTheme } from "next-themes";
import * as Button from "@/components/ui/button";
import * as Input from "@/components/ui/input";
import { Dispatch, SetStateAction, useMemo } from "react";
import { PartialBlock } from "@blocknote/core";

interface EditorProps {
	setContent?: Dispatch<SetStateAction<PartialBlock[] | undefined>>;
	initialContent?: PartialBlock[];
	editable?: boolean;
	onContentChange?: (doc: PartialBlock[] | undefined) => void;
}

const Editor = ({
	setContent,
	initialContent,
	editable = true,
	onContentChange,
}: EditorProps) => {
	const { resolvedTheme } = useTheme();

	// Memoize your options so that you’re not recreating the object every render
	const options = useMemo(
		() => ({
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
		[initialContent]
	);

	const editor = useCreateBlockNote(options);

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
		/>
	);
};

export default Editor;
