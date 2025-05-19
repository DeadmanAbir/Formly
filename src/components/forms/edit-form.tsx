import EditDraftForm from "./edit-draft-form";
import EditPublishedForm from "./edit-published-form";

interface EditFormProps {
	uuid: string;
	formData?: string;
}

const EditForm = ({ uuid, formData }: EditFormProps) => {
	const parsedData = formData ? JSON.parse(formData) : undefined;

	if (parsedData?.published) {
		return <EditPublishedForm formData={formData} />;
	}
	return <EditDraftForm formData={formData} uuid={uuid} />;
};

export default EditForm;
