
import { signIn } from "@/auth"
import { Button } from "./ui/button"
import { FaGithub } from "react-icons/fa";
 
export function GithubSignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github")
      }}
    >
      <Button className="inline-flex gap-4 px-6 py-3 w-full" type="submit"><FaGithub /><p>Signin with GitHub</p></Button>
    </form>
  )
} 