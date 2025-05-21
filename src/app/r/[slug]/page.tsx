import { cn } from "@/lib/utils";
import { notFound } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ClientFormSection from "@/components/ui/client-form-section";

interface Props {
	params: { slug: string };
}

export default async function FormPage({ params }: Props) {
	const { slug } = await params;
	const data = await fetch(`http://localhost:3000/api/fetch-form`, {
		method: "GET",
		headers: {
			id: slug,
		},
	});
	const res = await data.json();

	if (!res.data || !res.data.published) {
		notFound();
	}
	return (
		<div className="flex flex-col items-center justify-center ">
			<div className="relative w-full">
				<div className={cn("w-full h-[30vh]", res.data.bgColor)}></div>
				{res.data.logoUrl && res.data.logoUrl.length > 0 && (
					<div className="absolute left-1/2 -translate-x-1/2 -bottom-12">
						<Avatar className="h-24 w-24 border-4 border-white">
							<AvatarImage src={res.data.logoUrl} />
							<AvatarFallback>Logo</AvatarFallback>
						</Avatar>
					</div>
				)}
			</div>

			<h1 className="text-black w-full text-5xl text-center">
				{res.data.title && res.data.title.length > 0
					? res.data.title
					: "Untitled"}
			</h1>

			<ClientFormSection
				data={res.data.content}
				formId={slug}
				buttonLabel={res.data.buttonLabel}
			/>
		</div>
	);
}
