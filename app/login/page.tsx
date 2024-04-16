import { GithubSignIn } from "@/components/sign-in";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React from "react";

const LoginPage = () => {
  return (
    <main className="flex gap-5 justify-center items-center min-h-screen ">
      <section className="flex flex-col gap-5 text-center border-2 border-slate-950 rounded-2xl p-10">
        <p className="text-2xl">Sign In</p>
        <Separator className="border-slate-950 border my-5"/>
        <form className="flex flex-col gap-2 text-left">
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
        </form>
        <GithubSignIn />
      </section>
    </main>
  );
};

export default LoginPage;
