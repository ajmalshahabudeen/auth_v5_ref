export { auth as middleware } from "@/auth";

export const config = {
  matcher: [
    "/ProtectedPage/:path*",
    "/api",
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
