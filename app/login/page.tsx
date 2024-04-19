"use client";
import { auth, signIn } from "@/auth";
import GetSession from "@/components/getSession";
import {
  CredentialSignIn,
  GithubSignIn,
  GoogleSignIn,
} from "@/components/signIn";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  // const session = await auth()

  // if(session?.user) redirect("/ProtectedPage")

  const handleSignInGithub = async () => {
    await GithubSignIn();
  };

  const handleSignInGoogle = async () => {
    await GoogleSignIn();
  };

  const handleSignInCredentials = async () => {
    await CredentialSignIn();
  };

  const CheckSession = async () => {
    const session = await GetSession()
    console.log("the session is",session)
    if (session?.user) redirect("/ProtectedPage");
  };


  return (
    <main className="flex gap-5 justify-center items-center min-h-screen ">
      <section className="flex flex-col gap-5 text-center border-2 border-slate-950 rounded-2xl p-10">
        <p className="text-2xl">Sign In</p>
        <Separator className="border-slate-950 border my-5" />
        {/* <CredentialSignIn />
        <GithubSignIn />
        <GoogleSignIn /> */}
        <Button
          className="inline-flex gap-4 px-6 py-3 w-full"
          type="button"
          onClick={handleSignInGithub}
        >
          <FaGithub />
          <p>Sign in with GitHub</p>
        </Button>
        <Button
          variant={"outline"}
          className="inline-flex gap-4 px-6 py-3 w-full"
          type="button"
          onClick={handleSignInGoogle}
        >
          <FaGoogle />
          <p>Sign in with Google</p>
        </Button>
      </section>
    </main>
  );
};

export default LoginPage;
