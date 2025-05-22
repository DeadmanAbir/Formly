"use client";

import { Button } from "@/components/ui/button";
import { submitFormFn } from "@/lib/tanstack-query/mutation";
import { CustomPartialBlock } from "@/lib/types";
import { ArrowRight } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";

interface ClientFormButtonProps {
	label: string;
	formId: string;
	content: string;
}

const ClientFormButton: React.FC<ClientFormButtonProps> = ({
	label,
	formId,
	content,
}) => {
	const { mutate: submitForm, isPending: isSubmitting } = submitFormFn(
		"access_token",
		{
			onSuccess: (data: any) => {
				console.log(data);
			},
			onError: (error: unknown) => {
				console.error(error);
			},
		}
	);

	return (
		<Button
			variant="default"
			className="mt-2"
			onClick={() => {
				submitForm({
					formId,
					content,
				});
			}}
			disabled={isSubmitting}
		>
			{label}
			<span>
				<ArrowRight />
			</span>
		</Button>
	);
};

export default ClientFormButton;
