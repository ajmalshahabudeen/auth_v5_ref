"use server";
import { signIn } from "@/auth";

export async function GithubSignIn() {
    await signIn("github");
  }

export async function GoogleSignIn() {
    await signIn("google");
}

export async function CredentialSignIn(email:string, password:string) {
    await signIn("credentials", { email, password});
}