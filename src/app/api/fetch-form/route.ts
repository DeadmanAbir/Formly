import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(request: NextRequest) {
	const prisma = new PrismaClient();
	try {
		const id = request.headers.get("id") as string;
		const data = await prisma.form.findUnique({
			where: {
				id,
			},
			include: {
				submissions: true,
			},
		});
		return NextResponse.json({ success: true, data });
	} catch (err: any) {
		console.error(`Error in feching form`, err);
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
