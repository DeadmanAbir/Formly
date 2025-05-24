import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function DELETE(request: NextRequest) {
	const prisma = new PrismaClient();
	try {
		const id = request.headers.get("id") as string;
		await prisma.form.delete({
			where: {
				id,
			},
		});
		return NextResponse.json({ success: true });
	} catch (err: any) {
		console.error(`Error in deleting form`, err);
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
