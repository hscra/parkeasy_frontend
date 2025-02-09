import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./app/lib";

export async function middleware(request: NextRequest) {
  // return await updateSession(request);
  const session = request.cookies.get("authToken"); // Check if session exists
  console.log("all cookies of the request", request.cookies);
  console.log("middleware.tsx - auth token of the request", request.cookies.get("authToken"));

  console.log("middleware.tsx - session", session);

  return NextResponse.next(); // Continue to the next middleware
}

export const config = {
  matcher: ["/orders"], // Protect only /orders page
};
