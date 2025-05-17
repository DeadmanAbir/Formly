"use client";
import { useMutation } from "@tanstack/react-query";
import { insertPost } from "../api";
  

interface FormDetail {
    content: string;
    userId: string;
    formId: string;
}


export const insertFormFn = (accessToken: string, options = {}) => {
    return useMutation({
      mutationFn: (details: FormDetail) => insertPost(accessToken!, details),
      ...options,
    });
  };