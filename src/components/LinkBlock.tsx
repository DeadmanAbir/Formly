import { defaultProps } from "@blocknote/core";
import { createReactBlockSpec } from "@blocknote/react";
import { Input } from "@/components/ui/input";

// Create the Link block spec
export const LinkBlock = createReactBlockSpec(
	{
		// Block configuration
		type: "link",
		propSchema: {
			textAlignment: defaultProps.textAlignment,
			title: {
				default: "Untitled Link",
			},
			url: {
				default: "",
			},
		},
		content: "none",
	},
	{
		// No inline content as we'll manage it with our UI

		// Block implementation (render function)
		render: (props) => {
			const { block, editor } = props;

			return (
				<div className="p-4 border rounded-md bg-muted/20">
					<div className="flex flex-col gap-2">
						{/* Title field */}
						<div className="flex items-center">
							<h1
								className="text-xl font-bold outline-none"
								contentEditable
								onBlur={(e) => {
									editor.updateBlock(block, {
										props: {
											title: e.currentTarget.textContent || "Untitled Link",
										},
									});
								}}
								suppressContentEditableWarning={true}
							>
								{block.props.title}
							</h1>
						</div>

						{/* URL input using ShadCN */}
						<div className="flex items-center gap-2">
							<span className="text-sm font-medium">URL:</span>
							<Input
								className="flex-1"
								value={block.props.url}
								placeholder="https://example.com"
								onChange={(e) => {
									editor.updateBlock(block, {
										props: { url: e.target.value },
									});
								}}
							/>
						</div>

						{/* Display the actual link if URL exists */}
						{block.props.url && (
							<div className="mt-2">
								<a
									href={block.props.url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-sm text-blue-500 hover:underline"
								>
									{block.props.url}
								</a>
							</div>
						)}
					</div>
				</div>
			);
		},
	}
);
