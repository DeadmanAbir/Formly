interface FormDetail {
	userId: string;
	data: {
		content: string;
		title?: string;
		buttonLabel: string;
		formId: string;
		bgColor: string;
		logoUrl?: string;
		published: boolean;
	};
}

export const insertPost = async (accessToken: string, details: FormDetail) => {
	try {
		const response = await fetch(`/api/insert-form`, {
			method: "POST",
			//   headers: {
			//     'Content-Type': 'application/json',
			//     Authorization: `Bearer ${accessToken}`,
			//   },
			body: JSON.stringify({
				userId: details.userId,
				content: details.data.content,
				title: details.data.title,
				buttonLabel: details.data.buttonLabel,
				formId: details.data.formId,
				bgColor: details.data.bgColor,
				logoUrl: details.data.logoUrl,
				published: details.data.published,
			}),
		});

		if (!response.ok) {
			throw new Error(`Error: ${response.status}`);
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Failed to insert form:", error);
		throw error;
	}
};

export const fetchUserForms = async (accessToken: string) => {
	try {
		const response = await fetch(`/api/get-forms`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: accessToken,
			},
		});

		if (!response.ok) {
			throw new Error(`Error: ${response.status}`);
		}
		const data = await response.json();
		return data.data;
	} catch (error) {
		console.error("Failed to fetch user forms:", error);
		throw error;
	}
};

export const fetchForm = async (id: string) => {
	try {
		const response = await fetch(`/api/fetch-form`, {
			method: "GET",
			headers: {
				id,
			},
		});

		if (!response.ok) {
			throw new Error(`Error: ${response.status}`);
		}
		const data = await response.json();
		return data.data;
	} catch (error) {
		console.error("Failed to fetch form:", error);
		throw error;
	}
};
