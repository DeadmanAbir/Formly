import EditForm from "@/components/forms/edit-form";
import ShareForm from "@/components/forms/share-form";
import { notFound } from "next/navigation";

interface Props {
	params: { slug: string };
}

export default async function FormPage({ params }: Props) {
	const { slug } = await params;
	console.log(slug);
	if (slug[1] === "edit") {
		return <EditForm uuid={slug[0]} />;
	} else if (slug[1] === "share") {
		return <ShareForm />;
	}

	notFound();
}
