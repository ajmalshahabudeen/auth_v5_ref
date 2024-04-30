import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center min-h-screen justify-center gap-5 p-10">
      <div className="text-center my-10 gap-3 flex flex-col">
        <p className="text-3xl font-extrabold">Auth.js Framework</p>
        <p className="text-2xl font-extralight">For Next.js</p>
      </div>
      <Button asChild variant={"link"}>
        <Link href={"/login"}>Protected Page -&gt;</Link>
      </Button>
      <Button asChild variant={"link"}>
        <Link href={"/login"}>Login -&gt;</Link>
      </Button>
      <Button asChild variant={"link"}>
        <Link href={"/register"}>Register -&gt;</Link>
      </Button>
    </div>
  );
};

export default Home;
