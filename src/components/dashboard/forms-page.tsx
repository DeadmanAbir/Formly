"use client";

import { Button } from "@/components/ui/button";
import { MoreHorizontal, Pencil, X } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
	deleteFormFn,
	duplicateFormFn,
	renameFormFn,
} from "@/lib/tanstack-query/mutation";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";

interface FormsPageProps {
	formsData: any;
	uuid: string;
}

export const FormsPage: React.FC<FormsPageProps> = ({ formsData, uuid }) => {
	const router = useRouter();
	const queryClient = useQueryClient();

	const { mutate: deleteForm } = deleteFormFn("access_token", {
		onSuccess: (data: any) => {
			console.log(data);
			queryClient.invalidateQueries({ queryKey: ["fetch-forms"] });
		},
		onError: (error: unknown) => {
			console.error(error);
		},
	});

	const { mutate: duplicateForm } = duplicateFormFn("access_token", {
		onSuccess: (data: any) => {
			console.log(data);
			queryClient.invalidateQueries({ queryKey: ["fetch-forms"] });
		},
		onError: (error: unknown) => {
			console.error(error);
		},
	});

	const { mutate: renameForm } = renameFormFn("access_token", {
		onSuccess: (data: any) => {
			console.log(data);
			queryClient.invalidateQueries({ queryKey: ["fetch-forms"] });
		},
		onError: (error: unknown) => {
			console.error(error);
		},
	});

	const [renameModalOpen, setRenameModalOpen] = React.useState(false);
	const [renameFormId, setRenameFormId] = React.useState<string | null>(null);
	const [renameInput, setRenameInput] = React.useState("");

	const openRenameModal = (form: any) => {
		setRenameFormId(form.id);
		setRenameInput(form.title ?? "Untitled");
		setRenameModalOpen(true);
	};

	const closeRenameModal = () => {
		setRenameModalOpen(false);
		setRenameFormId(null);
		setRenameInput("");
	};

	const handleRename = () => {
		if (renameFormId) {
			renameForm({ id: renameFormId, title: renameInput });
		}
		closeRenameModal();
	};

	return (
		<>
			<div className="w-full space-y-4">
				<div className="flex items-center justify-between">
					<h1 className="text-2xl font-bold">Home</h1>
					<div className="flex items-center gap-2">
						<Button variant="outline">New workspace</Button>
						<Button
							onClick={() => {
								router.push(`/forms/${uuid}/edit`);
							}}
						>
							New form
						</Button>
					</div>
				</div>

				<div className="grid gap-4">
					{formsData.map((form: any) => (
						<div
							key={form.id}
							className="flex items-center justify-between border rounded-lg p-4"
						>
							{form.published ? (
								<Link href={`/forms/${form.id}/share`} className="flex-1">
									<div className="space-y-1">
										<div className="flex items-center gap-2">
											<h2 className="text-lg font-medium">
												{form.title ?? "Untitled"}
											</h2>
											{!form.published && (
												<span className="text-sm text-muted-foreground">
													Draft
												</span>
											)}
										</div>
										<p className="text-sm text-muted-foreground">
											Created {new Date(form.createdAt).toLocaleDateString()}
										</p>
									</div>
								</Link>
							) : (
								<div className="flex-1">
									<div className="space-y-1">
										<div className="flex items-center gap-2">
											<h2 className="text-lg font-medium">
												{form.title ?? "Untitled"}
											</h2>
											{!form.published && (
												<span className="text-sm text-muted-foreground">
													Draft
												</span>
											)}
										</div>
										<p className="text-sm text-muted-foreground">
											Created {new Date(form.createdAt).toLocaleDateString()}
										</p>
									</div>
								</div>
							)}

							<div className="flex items-center gap-2">
								<Button
									variant="ghost"
									size="icon"
									onClick={(event) => {
										event.stopPropagation();
										router.push(`/forms/${form.id}/edit`);
									}}
								>
									<Pencil className="h-4 w-4" />
								</Button>
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button variant="ghost" size="icon">
											<MoreHorizontal className="h-4 w-4" />
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="end">
										<DropdownMenuItem>Edit</DropdownMenuItem>
										<DropdownMenuItem onClick={() => openRenameModal(form)}>
											Rename
										</DropdownMenuItem>
										<DropdownMenuItem
											onClick={() => {
												duplicateForm(form.id);
											}}
										>
											Duplicate
										</DropdownMenuItem>
										<DropdownMenuItem
											className="text-red-600"
											onClick={() => {
												deleteForm(form.id);
											}}
										>
											Delete
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</div>
						</div>
					))}
				</div>
			</div>
			<Dialog open={renameModalOpen} onOpenChange={setRenameModalOpen}>
				<DialogContent className="max-w-md mx-auto">
					<DialogHeader>
						<DialogTitle>Rename this form</DialogTitle>
						<DialogClose asChild>
							<button
								className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none"
								onClick={closeRenameModal}
							>
								<X className="h-4 w-4" />
							</button>
						</DialogClose>
					</DialogHeader>
					<div className="mt-2">
						<label htmlFor="rename-input" className="block font-semibold mb-2">
							Form name
						</label>
						<Input
							id="rename-input"
							value={renameInput}
							onChange={(e) => setRenameInput(e.target.value)}
							className="w-full mb-6"
							placeholder="Enter form name"
							autoFocus
						/>
						<Button className="w-full" onClick={handleRename} disabled={!renameInput.trim()}>
							Complete
						</Button>
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
};
