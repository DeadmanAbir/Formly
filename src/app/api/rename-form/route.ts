import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function PATCH(request: NextRequest) {
	const prisma = new PrismaClient();
	try {
		const id = request.headers.get("id") as string;
		const { title } = await request.json();
		await prisma.form.update({
			where: {
				id,
			},
			data: {
				title,
			},
		});
		return NextResponse.json({ success: true });
	} catch (err: any) {
		console.error(`Error in renaming form`, err);
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
