"use client";
import { Register } from "@/components/signUp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

interface formData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterForm = () => {
  const route = useRouter();
  const [formData, setFormData] = useState<formData>({} as formData);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      setFormData({ username, email, password, confirmPassword });
      console.log(formData);
      const data = { username, email, password, confirmPassword };
      await Register(data).then((response:any) => {
        console.log(response);
        if (response.status === 200) {
          console.log("success");
          setSuccess(true);
          setError(null);
          setLoading(false);
          const Interval = setInterval(() => {
            setSuccess(false);
            setError(null);
            clearInterval(Interval);
            route.push("/login");
          },5000)
        }
        else {
          console.log("failed");
          setError(response.message);
          setLoading(false);
          const interval = setInterval(() => {
            setError(null);
            clearInterval(interval);
          },3000)
        }
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("Something went wrong, try again later");
    }

    // await Register(FormData)
    console.log(formData);
  };

  return (
    <section className="flex flex-col gap-5 w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <Input
          name="username"
          type="text"
          placeholder="Full Name"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          name="confirm-password"
          type="password"
          placeholder="Confirm Password"
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button className="inline-flex gap-4 px-6 py-3 w-full" type="submit" disabled={loading}>
          {loading ? "Creating Account..." : "Create Account"}
          <MdKeyboardArrowRight size={26} />
        </Button>
      </form>
      {success && <p className="text-green-500">Account Created Successfully! Please wait while we redirect you to login page</p>}
      {error && <p className="text-red-500">{error}</p>}
    </section>
  );
};
