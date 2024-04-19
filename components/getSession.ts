'use server';
import { auth } from "@/auth";

export default async function GetSession() {
  const session = await auth();

  if (!session) return null;

  return session;
}
