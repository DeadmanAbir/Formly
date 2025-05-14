"use client";
import FormsOptions from "@/components/forms/forms-options";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

type Props = {
	params: {
		slug: string;
	};
};

export default function FormPage({ params }: Props) {
	// const { slug } = params;
	const [showOptions, setShowOptions] = useState(true);
	const handleHeaderSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		alert("Form title saved");
		setShowOptions(!showOptions);
	};

	return (
		<div className="container max-w-3xl py-6">
			<div className="flex flex-col space-y-8">
				{/* Form Title Input */}
				<div className="border-l-4 border-gray-200 pl-6">
					<form onSubmit={handleHeaderSubmit}>
						<input
							type="text"
							placeholder="Form title"
							className="text-4xl font-light w-full border-none focus:outline-none focus:ring-0 text-gray-400 placeholder:text-gray-400"
						/>
					</form>
				</div>
			</div>
			{showOptions ? <FormsOptions /> : <h1>Editor...</h1>}
		</div>
	);
}
