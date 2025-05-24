"use client";
import { useMutation } from "@tanstack/react-query";
import {
	deleteForm,
	duplicateForm,
	insertForm,
	renameForm,
	submitForm,
} from "../api";

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

export const deleteFormFn = (accessToken: string, options = {}) => {
	return useMutation({
		mutationFn: (details: string) => deleteForm(accessToken!, details),
		...options,
	});
};

export const duplicateFormFn = (accessToken: string, options = {}) => {
	return useMutation({
		mutationFn: (details: string) => duplicateForm(accessToken!, details),
		...options,
	});
};

export const renameFormFn = (accessToken: string, options = {}) => {
	return useMutation({
		mutationFn: (details: { id: string; title: string }) =>
			renameForm(accessToken!, details),
		...options,
	});
};
