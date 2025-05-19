"use client";
import EmptyState from "./empty-state";
import { FormsPage } from "./forms-page";
import { fetchFormsQuery } from "@/lib/tanstack-query/query";
import { generateUUIDSegment } from "@/lib/helper";

export default function DashboardPage() {
	const uuid = generateUUIDSegment();
	const { data: formsData, isPending } = fetchFormsQuery(
		"6e51e3e4-8412-4126-97e1-f35176169a11"
	);

	if (isPending) {
		return <h1>Loading...</h1>;
	}

	if (!isPending && (!formsData || formsData.length === 0)) {
		return (
			<div className="flex flex-col items-center justify-center min-h-screen max-w-md mx-auto px-4">
				<EmptyState uuid={uuid} />
			</div>
		);
	}
	return (
		<div className="flex flex-col items-center justify-center min-h-screen max-w-md mx-auto px-4">
			<FormsPage formsData={formsData} uuid={uuid} />
		</div>
	);
}
