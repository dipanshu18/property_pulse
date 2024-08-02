import { getServerSession } from "next-auth";
import { NextResponse, type NextRequest } from "next/server";

export default async function middleware(request: NextRequest) {
  const session = await getServerSession();

  if (!session || !session.user) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile", "/messages", "/properties/add", "/properties/saved"],
};
