import EditDraftForm from "./edit-draft-form";
import EditPublishedForm from "./edit-published-form";

const EditForm = async ({ uuid }: { uuid: string }) => {
	const res = await fetch("http://localhost:3000/api/fetch-form", {
		method: "GET",
		headers: {
			id: uuid,
		},
	});
	const data = await res.json();

	if (data.data.published) {
		return <EditPublishedForm formData={JSON.stringify(data.data)} />;
	}
	return <EditDraftForm uuid={uuid} />;
};

export default EditForm;
