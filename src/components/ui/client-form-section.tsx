"use client";
import { useState } from "react";
import ViewForm from "@/components/view-form";
import ClientFormButton from "@/components/ui/client-form-button";
import { CustomPartialBlock } from "@/lib/types";

export default function ClientFormSection({
	data,
	formId,
	buttonLabel,
}: {
	data: string;
	formId: string;
	buttonLabel: string;
}) {
	const [content, setContent] = useState<CustomPartialBlock[] | undefined>(
		undefined
	);

	return (
		<>
			<ViewForm data={data} setContent={setContent} />
			<ClientFormButton
				label={buttonLabel}
				formId={formId}
				content={JSON.stringify(content)}
			/>
		</>
	);
}
