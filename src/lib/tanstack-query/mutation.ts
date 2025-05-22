"use client";
import { useMutation } from "@tanstack/react-query";
import { insertForm, submitForm } from "../api";

interface FormDetail {
	userId: string;
	data: {
		content?: string;
		title?: string;
		buttonLabel: string;
		formId: string;
		bgColor: string;
		logoUrl?: string;
		published: boolean;
	};
}

interface SubmitDetails {
	formId: string;
	content: string;
}

export const insertFormFn = (accessToken: string, options = {}) => {
	return useMutation({
		mutationFn: (details: FormDetail) => insertForm(accessToken!, details),
		...options,
	});
};

export const submitFormFn = (accessToken: string, options = {}) => {
	return useMutation({
		mutationFn: (details: SubmitDetails) => submitForm(accessToken!, details),
		...options,
	});
};
