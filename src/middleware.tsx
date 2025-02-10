import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const session = request.cookies.get("authToken");

  if (session) {
    // Forbid access to the signin page if the user is already signed in
    if (request.nextUrl.pathname === "/signin") {
      return NextResponse.rewrite(new URL('/', request.url))
    }

    // Proceed to the logged-in-only content
    return NextResponse.next();
  }

  // Forbid access to restricted pages if the user is not signed in
  return NextResponse.rewrite(new URL('/signin', request.url));
}

export const config = {
  matcher: ["/orders", "/signin", "/signout", "/account", "/parking"],
};
