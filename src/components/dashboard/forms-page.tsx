"use client";

import { Button } from "@/components/ui/button";
import { MoreHorizontal, Pencil } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface FormsPageProps {
	formsData: any;
	uuid: string;
}

export const FormsPage: React.FC<FormsPageProps> = ({ formsData, uuid }) => {
	const router = useRouter();
	console.log("formsData", typeof formsData[0].published);
	return (
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
						<Link href={`/forms/${form.id}/share`} className="flex-1">
							<div className="space-y-1">
								<div className="flex items-center gap-2">
									<h2 className="text-lg font-medium">
										{form.title ?? "Untitled"}
									</h2>
									{!form.published && (
										<span className="text-sm text-muted-foreground">Draft</span>
									)}
								</div>
								<p className="text-sm text-muted-foreground">
									Created {new Date(form.createdAt).toLocaleDateString()}
								</p>
							</div>
						</Link>

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
