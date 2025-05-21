import EditForm from "@/components/forms/edit-form";
import ShareForm from "@/components/forms/share-form";
import { notFound } from "next/navigation";

interface Props {
	params: { slug: string };
}

export default async function FormPage({ params }: Props) {
	const { slug } = await params;
	const res = await fetch("http://localhost:3000/api/fetch-form", {
		method: "GET",
		headers: {
			id: slug[0],
		},
	});
	const data = await res.json();
	const formData = data?.data ? JSON.stringify(data.data) : undefined;
	const submissions = data?.data
		? JSON.stringify(data.data.submissions)
		: undefined;

	if (slug[1] === "edit") {
		return <EditForm uuid={slug[0]} formData={formData} />;
	} else if (slug[1] === "share") {
		return <ShareForm show={data?.data?.published} submissions={submissions} />;
	}

	notFound();
}
