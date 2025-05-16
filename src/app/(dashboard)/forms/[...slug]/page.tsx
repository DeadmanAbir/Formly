import EditForm from "@/components/forms/edit-form";
import ShareForm from "@/components/forms/share-form";
import { notFound } from "next/navigation";
import { use } from "react";

type Props = {
	params: Promise<{
		slug: string;
	}>;
};

export default function FormPage({ params }: Props) {
	const { slug } = use(params);
	console.log(slug);
	if (slug[1] === "edit") {
		return <EditForm />;
	} else if (slug[1] === "share") {
		return <ShareForm />;
	}

	notFound();
}
