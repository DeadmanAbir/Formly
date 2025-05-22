"use client";

import { Dispatch, SetStateAction } from "react";
import { Editor } from "./forms/dynamic-editor";
import { CustomPartialBlock } from "@/lib/types";

const ViewForm = ({
	data,
	setContent,
}: {
	data: string;
	setContent: Dispatch<SetStateAction<CustomPartialBlock[] | undefined>>;
}) => {
	return (
		<Editor
			initialContent={JSON.parse(data)}
			editable={false}
			setContent={setContent}
		/>
	);
};

export default ViewForm;
