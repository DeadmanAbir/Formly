import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(request: NextRequest) {
	const prisma = new PrismaClient();
	try {
		const userId = request.headers.get("authorization");

		const data = await prisma.form.findMany({
			where: {
				userId: userId!,
			},
		});
		return NextResponse.json({ success: true, data });
	} catch (err: any) {
		console.error(`Error in feching forms`, err);
		return NextResponse.json({
			success: false,
			status: 500,
			error: err.message,
		});
	}
}
