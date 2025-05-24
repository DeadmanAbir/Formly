import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { generateUUIDSegment } from "@/lib/helper";

export async function POST(request: NextRequest) {
	const prisma = new PrismaClient();
	try {
		const formId = request.headers.get("id") as string;
		const originalForm = await prisma.form.findUnique({
			where: { id: formId },
		});

		if (!originalForm) {
			throw new Error("Form not found");
		}
		const { id, createdAt, ...formData } = originalForm;

		await prisma.form.create({
			data: {
				...formData,
				id: generateUUIDSegment(),
			},
		});

		return NextResponse.json({ success: true });
	} catch (err: any) {
		console.error(`Error in duplicating form`, err);
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
