import {
  GithubSignIn,
  GoogleSignIn,
  CredentialSignIn,
} from "@/components/sign-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React from "react";

const LoginPage = () => {
  return (
    <main className="flex gap-5 justify-center items-center min-h-screen ">
      <section className="flex flex-col gap-5 text-center border-2 border-slate-950 rounded-2xl p-10">
        <p className="text-2xl">Sign In</p>
        <Separator className="border-slate-950 border my-5" />
        <CredentialSignIn />
        <GithubSignIn />
        <GoogleSignIn />
      </section>
    </main>
  );
};

export default LoginPage;
