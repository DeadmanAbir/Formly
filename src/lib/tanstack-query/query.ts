"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchUserForms } from "../api";

export const fetchFormsQuery = (accessToken: string, options = {}) => {
    return useQuery({
      queryKey: ['fetch-forms'],
      queryFn: () => fetchUserForms(accessToken!),
      ...options,
    });
  };