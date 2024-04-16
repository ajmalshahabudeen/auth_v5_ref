export { auth as middleware } from "@/auth";

export const config = {
  matcher: ["/ProtectedPage/:path*", "/api/:path*"],
};
