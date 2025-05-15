import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(request: NextRequest) {
	const prisma = new PrismaClient();
	try {
		const body = await request.json();
		const { content, userId } = body;

		const data = await prisma.form.create({
			data: {
				content,
				userId,
			},
		});
		return NextResponse.json({ success: true, data });
        
	} catch (err: any) {
		console.error(`Error in inserting formdata`, err);
		return NextResponse.json({
			success: false,
			status: 500,
			error: err.message,
		});
	}
}
