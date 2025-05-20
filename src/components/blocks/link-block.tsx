import { defaultProps } from "@blocknote/core";
import { createReactBlockSpec } from "@blocknote/react";
import { Input } from "@/components/ui/input";
import { Link } from "lucide-react";

export const LinkBlock = createReactBlockSpec(
	{
		type: "link",
		propSchema: {
			textAlignment: defaultProps.textAlignment,
			url: {
				default: "",
			},
		},
		content: "none",
	},
	{
		render: (props) => {
			const { block, editor } = props;

			return (
				<div className="p-4 pt-0 border rounded-md bg-muted/20">
					<div className="flex flex-col gap-2">
						{/* URL input using ShadCN */}
						<div className="flex items-center gap-2">
							<Input
								className="flex-1 border-none focus:ring-0 focus:ring-offset-0"
								value={block.props.url}
								placeholder="Type placeholder text"
								onChange={(e) => {
									editor.updateBlock(block, {
										props: { url: e.target.value },
									});
								}}
							/>
							<Link size={28} />
						</div>
					</div>
				</div>
			);
		},
	}
);
