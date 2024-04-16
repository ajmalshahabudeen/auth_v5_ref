import { signIn } from "@/auth";
import { Button } from "./ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function GithubSignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <Button className="inline-flex gap-4 px-6 py-3 w-full" type="submit">
        <FaGithub />
        <p>Sign in with GitHub</p>
      </Button>
    </form>
  );
}

export function GoogleSignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <Button
        variant={"outline"}
        className="inline-flex gap-4 px-6 py-3 w-full"
        type="submit"
      >
        <FaGoogle />
        <p>Sign in with Google</p>
      </Button>
    </form>
  );
}

export function CredentialSignIn() {
  return (
    <form
      className="flex flex-col gap-5 text-left"
      action={async (formData) => {
        "use server";
        await signIn("credentials", formData);
      }}
    >
      <Input name="email" type="email" placeholder="Email" required />

      <Input name="password" type="password" placeholder="Password" required />

      <Button>Sign in with Credentials</Button>
    </form>
  );
}
