import { LinkBlock } from "@/components/blocks/link-block";
import { QuestionBlock } from "@/components/blocks/question-block";
import {
	BlockNoteEditor,
	BlockNoteSchema,
	defaultBlockSchema,
	DefaultBlockSchema,
	defaultBlockSpecs,
	PartialBlock,
} from "@blocknote/core";

export const schema = BlockNoteSchema.create({
	blockSpecs: {
		...defaultBlockSpecs,
		link: LinkBlock,
		question: QuestionBlock,
	},
});

export type CustomBlockSchema = typeof schema.blockSchema;
export type CustomPartialBlock = PartialBlock<CustomBlockSchema>;

// Get the editor type from your schema
export type CustomBlockNoteEditor = BlockNoteEditor<CustomBlockSchema>;
