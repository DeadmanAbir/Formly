import { defaultProps } from "@blocknote/core";
import { createReactBlockSpec } from "@blocknote/react";
import { Input } from "@/components/ui/input";

// Create the Question block spec
export const HeaderBlock = createReactBlockSpec(
	{
		type: "header",
		propSchema: {
			textAlignment: defaultProps.textAlignment,
			title: {
				default: "",
			},
		},
		content: "none",
	},
	{
		render: (props) => {
			const { block, editor } = props;
			return (
				<div className="flex items-center pb-2">
					<Input
						type="text"
						value={block.props.title || ""}
						placeholder="Type a question"
						className="text-3xl font-extrabold text-gray-700 placeholder-gray-400 border-0 border-b border-gray-300 rounded-none shadow-none px-0 bg-transparent h-auto min-h-0 outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
						onChange={(e) => {
							editor.updateBlock(block, {
								props: { title: e.target.value },
							});
						}}
						onBlur={(e) => {
							editor.updateBlock(block, {
								props: { title: e.target.value },
							});
						}}
						autoFocus={block.props.title === ""}
					/>
				</div>
			);
		},
	}
);
