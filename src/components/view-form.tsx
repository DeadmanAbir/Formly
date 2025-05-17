"use client";

import { Editor } from "./forms/dynamic-editor";

const ViewForm = ({ data }: { data: string }) => {
	return <Editor initialContent={JSON.parse(data)} editable={false} />;
};

export default ViewForm;
