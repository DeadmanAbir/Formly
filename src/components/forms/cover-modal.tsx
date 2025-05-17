"use client";

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
import { Dispatch, SetStateAction } from "react";

interface CoverModalProps {
	isOpen: boolean;
	onClose: () => void;
	setBgColor: Dispatch<SetStateAction<string>>;
}

export function CoverModal({ isOpen, onClose, setBgColor }: CoverModalProps) {
	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="sm:max-w-[640px]">
				<DialogTitle>Change Cover</DialogTitle>
				<DialogHeader className="border-b pb-4">
					<Tabs defaultValue="upload" className="w-full">
						<div className="flex flex-col space-y-4">
							<div className="flex items-center justify-between">
								<TabsList className="grid w-full max-w-[400px] grid-cols-4">
									<TabsTrigger value="upload">Upload</TabsTrigger>
									<TabsTrigger value="link">Link</TabsTrigger>
									<TabsTrigger value="unsplash">Unsplash</TabsTrigger>
									<TabsTrigger value="color">Color</TabsTrigger>
								</TabsList>
								<Button
									variant="ghost"
									size="icon"
									onClick={() => {
										setBgColor("bg-white");
										onClose();
									}}
								>
									<Trash2 className="h-4 w-4" />
								</Button>
							</div>

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
											Recommended dimensions: minimum 1500 pixels wide
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
									/>
									<Button className="w-full" variant="default">
										Submit
									</Button>
								</div>
							</TabsContent>

							<TabsContent value="unsplash">
								<div className="text-center py-8">
									Unsplash integration would go here
								</div>
							</TabsContent>

							<TabsContent value="color">
								<div className="grid grid-cols-4 gap-4">
									<Button
										className="h-16 bg-black rounded-lg cursor-pointer"
										onClick={() => {
											setBgColor("bg-black");
											onClose();
										}}
									/>
									<Button
										className="h-16 bg-blue-600 rounded-lg cursor-pointer"
										onClick={() => {
											setBgColor("bg-blue-600");
											onClose();
										}}
									/>
									<Button
										className="h-16 bg-purple-200 rounded-lg cursor-pointer"
										onClick={() => {
											setBgColor("bg-purple-200");
											onClose();
										}}
									/>
									<Button
										className="h-16 bg-rose-100 rounded-lg cursor-pointer"
										onClick={() => {
											setBgColor("bg-rose-100");
											onClose();
										}}
									/>
								</div>
							</TabsContent>
						</div>
					</Tabs>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
