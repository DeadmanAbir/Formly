import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	console.log("middleware running");

	return NextResponse.next();
}

export const config = {
	matcher: "/:path*",
};
