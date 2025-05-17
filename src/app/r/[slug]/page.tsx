import ViewForm from "@/components/view-form";
import { notFound } from "next/navigation";

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

	if (!res.data) {
		notFound();
	}
	return (
		<div className="flex items-center justify-center min-h-screen">
			<ViewForm data={res.data.content} />
		</div>
	);
}
