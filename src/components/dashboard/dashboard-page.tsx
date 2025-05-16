"use client";
import { useState } from "react";
import EmptyState from "./empty-state";
import { FormsPage } from "./forms-page";

export default function DashboardPage() {
	const [isEmpty, setIsEmpty] = useState(false);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen max-w-md mx-auto px-4">
			{!isEmpty ? (
				<FormsPage onEmpty={() => setIsEmpty(true)} />
			) : (
				<EmptyState />
			)}
		</div>
	);
}
