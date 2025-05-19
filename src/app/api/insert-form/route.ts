import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(request: NextRequest) {
	const prisma = new PrismaClient();
	try {
		const body = await request.json();
		const {
			content,
			userId,
			formId,
			title,
			buttonLabel,
			bgColor,
			logoUrl,
			published,
		} = body;
		const existingForm = await prisma.form.findUnique({
			where: { id: formId },
		});

		if (existingForm) {
			const updatedForm = await prisma.form.update({
				where: { id: formId },
				data: {
					content,
					title,
					buttonLabel,
					bgColor,
					logoUrl,
					published,
				},
			});
			return NextResponse.json({ success: true, data: updatedForm });
		}

		const data = await prisma.form.create({
			data: {
				id: formId,
				content,
				userId,
				title,
				buttonLabel,
				bgColor,
				logoUrl,
				published,
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
