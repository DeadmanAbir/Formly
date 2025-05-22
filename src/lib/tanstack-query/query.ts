"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchForm, fetchUserForms, getSubmissions } from "../api";

export const fetchFormsQuery = (accessToken: string, options = {}) => {
	return useQuery({
		queryKey: ["fetch-forms"],
		queryFn: () => fetchUserForms(accessToken!),
		...options,
	});
};

export const fetchFormQuery = (id: string, options = {}) => {
	return useQuery({
		queryKey: ["fetch-form"],
		queryFn: () => fetchForm(id),
		...options,
	});
};

export const getSubmissionsQuery = (id: string, options = {}) => {
	return useQuery({
		queryKey: ["get-submissions"],
		queryFn: () => getSubmissions("abc", id),
		...options,
	});
};
