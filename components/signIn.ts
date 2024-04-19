"use server";
import { signIn } from "@/auth";

export async function GithubSignIn() {
    await signIn("github");
  }

export async function GoogleSignIn() {
    await signIn("google");
}

export async function CredentialSignIn() {
    await signIn("credentials", { email: "X9LQI@example.com", password: "password" });
}