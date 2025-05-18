import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";

type PreviewFormProps = {
	showPreview: boolean;
	setShowPreview: (show: boolean) => void;
};

const PreviewForm: React.FC<PreviewFormProps> = ({
	showPreview,
	setShowPreview,
}) => {
	return (
		<div className="w-full">
			<div className="flex flex-col h-screen">
				<div className="flex justify-end p-4">
					<Button
						variant="ghost"
						className="text-sm"
						onClick={() => setShowPreview(!showPreview)}
					>
						<span>
							<ArrowLeft />
						</span>
						Back to editor
					</Button>
				</div>
				<div className="flex flex-1 items-center justify-center">
					<h1>This is the preview page</h1>
				</div>
			</div>
		</div>
	);
};

export default PreviewForm;
