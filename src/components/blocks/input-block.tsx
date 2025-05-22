import { defaultProps } from "@blocknote/core";
import { createReactBlockSpec } from "@blocknote/react";
import { Input } from "@/components/ui/input";
import {
	AlignJustify,
	AtSign,
	Hash,
	Layers2,
	Link,
	Phone,
	Text,
	LucideIcon,
} from "lucide-react";

// Map input types to their corresponding icons
export const inputTypeIcons: Record<string, LucideIcon> = {
	link: Link,
	phone: Phone,
	email: AtSign,
	number: Hash,
	short: Layers2,
	long: AlignJustify,
	text: Text,
	// Add any additional input types here
};

const input_type: Record<string, string> = {
	link: "url",
	phone: "tel",
	email: "email",
	number: "number",
	short: "text",
	long: "text",
	text: "text",
};

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

			// Get the icon component for the current input type, defaulting to Text icon
			const IconComponent = inputTypeIcons[inputType as string] || Text;

			return (
				<div className="p-4 pt-0 border rounded-md bg-muted/20">
					<div className="flex flex-col gap-2">
						{/* URL input using ShadCN */}
						<div className="flex items-center gap-2">
							<Input
								type={input_type[inputType]}
								className="flex-1 border-none focus:ring-0 focus:ring-offset-0"
								value={block.props.value}
								placeholder="Type placeholder text"
								onChange={(e) => {
									editor.updateBlock(block, {
										props: { value: e.target.value },
									});
								}}
							/>
							<IconComponent size={28} />
						</div>
					</div>
				</div>
			);
		},
	}
);
