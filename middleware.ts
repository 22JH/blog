import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { UserType } from "./app/types/post.type";

export default withAuth(
  function middleware(req) {
    const user = req.nextauth?.token as UserType | null;
    if (user === undefined || user?.user.role !== "admin") {
      return NextResponse.redirect(new URL("/", req.url));
    }
    console.log(req);
    console.log("--------------------------------------------");
  }
  // {
  //   callbacks: {
  //     authorized: ({ req, token }) => {
  //       if (req.nextUrl.pathname === "/write" || "/update") {
  //         if (token?.user?.role !== "admin") {
  //           // return NextResponse.redirect(new URL("/", req.url));
  //         }
  //       }
  //       return true;
  //     },
  //   },
  // }
);

export const config = { matcher: ["/write", "/update/:path*"] };
