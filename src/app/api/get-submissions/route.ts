import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(request: NextRequest) {
	const prisma = new PrismaClient();
	try {
		const id = request.headers.get("id") as string;
		const data = await prisma.submission.findMany({
			where: {
				formId: id,
			},
		});
		return NextResponse.json({ success: true, data: JSON.stringify(data) });
	} catch (err: any) {
		console.error(`Error in feching submissions`, err);
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
