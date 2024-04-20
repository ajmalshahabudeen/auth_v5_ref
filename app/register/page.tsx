"use client";
import GetSession from "@/components/getSession";
import {
  CredentialSignIn,
  GithubSignIn,
  GoogleSignIn,
} from "@/components/signIn";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { RegisterForm } from "./form";
import Link from "next/link";

const LoginPage = () => {
  const route = useRouter();

  const handleSignInGithub = async () => {
    await GithubSignIn();
  };

  const handleSignInGoogle = async () => {
    await GoogleSignIn();
  };

  const CheckSession = async () => {
    const session = await GetSession();
    console.log("the session is", session);
    if (session?.user) route.replace("/ProtectedPage");
  };

  useEffect(() => {
    CheckSession();
  });

  return (
    <main className="flex gap-5 justify-center items-center min-h-screen w-full">
      <section className="flex flex-col gap-5 text-center border-2 border-slate-950 rounded-2xl p-10 w-4/12">
        <p className="text-2xl">Account Creation</p>
        <Separator className="border-slate-950 border my-5" />
        <RegisterForm />
        <Button
          className="inline-flex gap-4 px-6 py-3 w-full"
          type="button"
          onClick={handleSignInGithub}
        >
          <FaGithub />
          <p>Sign up with GitHub</p>
        </Button>
        <Button
          variant={"outline"}
          className="inline-flex gap-4 px-6 py-3 w-full"
          type="button"
          onClick={handleSignInGoogle}
        >
          <FaGoogle />
          <p>Sign up with Google</p>
        </Button>
        <Button variant="link" asChild className="inline-flex gap-4 px-6 py-3 w-full">
        <Link href="/login">Already have an account? -&gt;</Link>
        </Button>
      </section>
    </main>
  );
};

export default LoginPage;
