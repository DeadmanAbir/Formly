import EditDraftForm from "./edit-draft-form";

interface EditFormProps {
	uuid: string;
	formData?: string;
}

const EditForm = ({ uuid, formData }: EditFormProps) => {
	return <EditDraftForm formData={formData} uuid={uuid} />;
};

export default EditForm;
