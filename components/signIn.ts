"use server";
import { signIn } from "@/auth";
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate())
export async function GithubSignIn() {
    await signIn("github");
  }

export async function GoogleSignIn() {
    await signIn("google");
}

export async function CredentialSignIn(email:string, password:string) {

    const myPlaintextPassword = password;
    const data = await prisma.user.findFirst({
      where: {
        email,
      },
    })

    const hash = data?.password as string
    const isMatch = bcrypt.compareSync(myPlaintextPassword, hash);

    if (!isMatch) {
        return { message: "Invalid credentials", status: 400 };
    }
    await signIn("credentials", { email, password});
}