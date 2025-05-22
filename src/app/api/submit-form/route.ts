import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const {
			content,

			formId,
		} = body;

		const data = await prisma.submission.create({
			data: {
				formId,
				content,
			},
		});

		return NextResponse.json({ success: true, data });
	} catch (err: any) {
		console.error(`Error submitting form data:`, err);
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
