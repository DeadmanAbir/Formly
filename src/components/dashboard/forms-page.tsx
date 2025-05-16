"use client";

import { fetchFormsQuery } from "@/lib/tanstack-query/query";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Pencil } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

interface FormsPageProps {
	onEmpty?: () => void;
}

export const FormsPage: React.FC<FormsPageProps> = ({ onEmpty }) => {
	const { data: postsData, isPending } = fetchFormsQuery(
		"6e51e3e4-8412-4126-97e1-f35176169a11"
	);

	// Notify parent if data is loaded and empty
	useEffect(() => {
		if (!isPending && Array.isArray(postsData) && postsData.length === 0) {
			onEmpty?.();
		}
	}, [isPending, postsData, onEmpty]);

	if (isPending) {
		return (
			<div className="flex flex-col items-center justify-center min-h-screen max-w-md mx-auto px-4">
				<h1>Loading........</h1>
			</div>
		);
	}

	// Render nothing if no data
	if (!postsData || postsData.length === 0) {
		return null;
	}

	return (
		<div className="w-full space-y-4">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl font-bold">Home</h1>
				<div className="flex items-center gap-2">
					<Button variant="outline">New workspace</Button>
					<Button>New form</Button>
				</div>
			</div>

			<div className="grid gap-4">
				{postsData.map((form: any) => (
					<div
						key={form.id}
						className="flex items-center justify-between border rounded-lg p-4"
					>
						<div className="space-y-1">
							<div className="flex items-center gap-2">
								<h2 className="text-lg font-medium">Untitled</h2>
								<span className="text-sm text-muted-foreground">Draft</span>
							</div>
							<p className="text-sm text-muted-foreground">
								Edited {new Date(form.created_at).toLocaleDateString()}
							</p>
						</div>

						<div className="flex items-center gap-2">
							<Link href={`/forms/${form.id}`}>
								<Button variant="ghost" size="icon">
									<Pencil className="h-4 w-4" />
								</Button>
							</Link>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="ghost" size="icon">
										<MoreHorizontal className="h-4 w-4" />
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end">
									<DropdownMenuItem>Edit</DropdownMenuItem>
									<DropdownMenuItem>Rename</DropdownMenuItem>
									<DropdownMenuItem>Duplicate</DropdownMenuItem>
									<DropdownMenuItem className="text-red-600">
										Delete
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
