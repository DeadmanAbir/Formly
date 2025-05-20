import { HeaderBlock } from "@/components/blocks/header-block";
import { InputBlock } from "@/components/blocks/input-block";
import {
	BlockNoteEditor,
	BlockNoteSchema,
	defaultBlockSpecs,
	PartialBlock,
} from "@blocknote/core";

export const schema = BlockNoteSchema.create({
	blockSpecs: {
		...defaultBlockSpecs,
		input: InputBlock,
		header: HeaderBlock,
	},
});

export type CustomBlockSchema = typeof schema.blockSchema;
export type CustomPartialBlock = PartialBlock<CustomBlockSchema>;

// Get the editor type from your schema
export type CustomBlockNoteEditor = BlockNoteEditor<CustomBlockSchema>;
