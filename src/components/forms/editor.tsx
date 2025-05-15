"use client";

import { codeBlock } from "@blocknote/code-block";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/shadcn/style.css";
import { useTheme } from "next-themes";
import * as Button from "@/components/ui/button";
import * as Input from "@/components/ui/input";
import { Dispatch, SetStateAction, useMemo, useState } from "react";
import { Block, BlockNoteEditor, PartialBlock } from "@blocknote/core";
interface EditorProps {
	setContent: Dispatch<SetStateAction<PartialBlock[] | undefined>>;
	initialContent: PartialBlock[] | undefined;
	editable?: boolean;
}

const Editor = ({ setContent, initialContent, editable }: EditorProps) => {
	const { resolvedTheme } = useTheme();

	let editor;
	if (initialContent) {
		editor = useCreateBlockNote({
			codeBlock,
			initialContent: initialContent,
		});
	} else {
		editor = useCreateBlockNote({
			codeBlock,
		});
	}

	return (
		<BlockNoteView
			editable={editable}
			editor={editor}
			onChange={() => {
				setContent(editor.document);
			}}
			theme={resolvedTheme === "dark" ? "dark" : "light"}
			shadCNComponents={{
				Input,
				Button,
			}}
		/>
	);
};

export default Editor;
