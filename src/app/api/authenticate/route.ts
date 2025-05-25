import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	try {
		const session = await auth.api.getSession({
			headers: await headers(),
		});
		return NextResponse.json({ data: session });
	} catch (err: any) {
		console.error(`Error in authenticate`, err);
		return NextResponse.json(
			{
				success: false,
				error: err.message,
			},
			{
				status: 401,
			}
		);
	}
}
