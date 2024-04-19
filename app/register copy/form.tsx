"use client";
import { CredentialSignIn } from "@/components/signIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { FaKey } from "react-icons/fa";

export const CredentialForm = () => {
    const [error, setError] = useState<string | null>(null);
  const handleSubmit = async(e: any) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    await CredentialSignIn(email, password).then((response) => {
      console.log("the response is",response);
    }).catch((error) => {
      console.log("the error is 007",error);
      setError("User Not Found")
      const interval = setInterval(() => {
        setError(null);
        clearInterval(interval);
      },3000)
    });
  };

  return (
    <section className="flex flex-col gap-5">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <Input name="email" type="email" placeholder="Email" required />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <Button className="inline-flex gap-4 px-6 py-3 w-full" type="submit">
          <FaKey />
          Sign in with Credentials
        </Button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
    </section>
  );
};
