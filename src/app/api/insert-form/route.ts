import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// Create a single PrismaClient instance and reuse it
const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
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

		const data = await prisma.form.upsert({
			where: { id: formId },
			update: {
				content,
				title,
				buttonLabel,
				bgColor,
				logoUrl,
				published,
			},
			create: {
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
		console.error(`Error processing form data:`, err);
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
