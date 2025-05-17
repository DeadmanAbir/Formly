import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(request: NextRequest) {
	const prisma = new PrismaClient();
	try {
		const body = await request.json();
		const { content, userId, formId, title, buttonLabel } = body;
		const existingForm = await prisma.form.findUnique({
			where: { id: formId },
		});

		if (existingForm) {
			return NextResponse.json(
				{
					success: false,
					error: "Form with this ID already exists.",
				},
				{
					status: 400,
				}
			);
		}

		const data = await prisma.form.create({
			data: {
				id: formId,
				content,
				userId,
				title,
				buttonLabel,
			},
		});
		return NextResponse.json({ success: true, data });
	} catch (err: any) {
		console.error(`Error in inserting formdata`, err);
		return NextResponse.json(
			{
				success: false,
				error: err.message,
			},
			{
				status: 500,
			}
		);
	}
}
