import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";
import { useState } from "react";

interface LogoModalProps {
	isOpen: boolean;
	onClose: () => void;
	onUpload: (logoUrl: string) => void;
	onRemove: () => void;
}

export function LogoModal({
	isOpen,
	onClose,
	onUpload,
	onRemove,
}: LogoModalProps) {
	const [link, setLink] = useState("");

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="sm:max-w-[640px]">
				<DialogTitle className="flex items-center justify-between">
					<span>Logo</span>
					<Button
						variant="ghost"
						size="icon"
						onClick={() => {
							onRemove();
							onClose();
						}}
					>
						<Trash2 className="h-4 w-4" />
					</Button>
				</DialogTitle>
				<DialogHeader className="border-b pb-4">
					<Tabs defaultValue="upload" className="w-full">
						<div className="flex flex-col space-y-4">
							<TabsList className="grid w-full max-w-[400px] grid-cols-2">
								<TabsTrigger value="upload">Upload</TabsTrigger>
								<TabsTrigger value="link">Link</TabsTrigger>
							</TabsList>

							<TabsContent value="upload">
								<div className="border-2 border-dashed rounded-lg p-12 text-center">
									<div className="flex flex-col items-center justify-center">
										<div className="mb-4">
											<svg
												className="mx-auto h-12 w-12 text-gray-400"
												stroke="currentColor"
												fill="none"
												viewBox="0 0 48 48"
											>
												<path
													d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</div>
										<p className="text-sm text-gray-600">
											Click to choose a file or drag here
										</p>
										<p className="text-xs text-gray-500 mt-1">
											Recommended dimensions: 200×200 pixels
										</p>
										<p className="text-xs text-gray-500">Size limit: 10 MB</p>
									</div>
								</div>
							</TabsContent>

							<TabsContent value="link">
								<div className="space-y-4">
									<Input
										placeholder="Paste any image link from the web"
										className="w-full"
										value={link}
										onChange={(e) => setLink(e.target.value)}
									/>
									<Button
										className="w-full"
										variant="default"
										onClick={() => {
											onUpload(link);
											onClose();
										}}
									>
										Submit
									</Button>
								</div>
							</TabsContent>
						</div>
					</Tabs>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
