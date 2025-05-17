"use client";
import { useMutation } from "@tanstack/react-query";
import { insertPost } from "../api";
  

interface FormDetail {
    userId: string;
    data: {
      content: string;
      title: string;
      buttonLabel: string;
      formId: string;
    };
}


export const insertFormFn = (accessToken: string, options = {}) => {
    return useMutation({
      mutationFn: (details: FormDetail) => insertPost(accessToken!, details),
      ...options,
    });
  };