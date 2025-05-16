import EmptyState from "@/components/dashboard/empty-state";
import { FormsPage } from "@/components/dashboard/forms-page";

export default function Page() {
	const formsPageContent = <FormsPage />;

	return (
		<div className="flex flex-col items-center justify-center min-h-screen max-w-md mx-auto px-4">
			{formsPageContent !== null ? formsPageContent : <EmptyState />}
		</div>
	);
}
