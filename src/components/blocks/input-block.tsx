import { defaultProps } from "@blocknote/core";
import { createReactBlockSpec } from "@blocknote/react";
import { Input } from "@/components/ui/input";
import { Link, Text } from "lucide-react";

export const InputBlock = createReactBlockSpec(
	{
		type: "input",
		propSchema: {
			textAlignment: defaultProps.textAlignment,
			value: {
				default: "",
			},
			inputType: { default: "text" },
		},
		content: "none",
	},
	{
		render: (props) => {
			const { block, editor } = props;
			const { inputType } = block.props;
			return (
				<div className="p-4 pt-0 border rounded-md bg-muted/20">
					<div className="flex flex-col gap-2">
						{/* URL input using ShadCN */}
						<div className="flex items-center gap-2">
							<Input
								className="flex-1 border-none focus:ring-0 focus:ring-offset-0"
								value={block.props.value}
								placeholder="Type placeholder text"
								onChange={(e) => {
									editor.updateBlock(block, {
										props: { value: e.target.value },
									});
								}}
							/>

							{inputType === "link" ? <Link size={28} /> : <Text size={28} />}
						</div>
					</div>
				</div>
			);
		},
	}
);
