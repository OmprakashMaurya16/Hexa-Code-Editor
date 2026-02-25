import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Chrome, Github } from "lucide-react";
import { signIn } from "@/auth";

async function handleGoogleSignIn() {
  "use server";
  await signIn("google");
}

async function handleGithubSignIn() {
  "use server";
  await signIn("github");
}

const SignInFormClient = () => {
  return (
    <Card className="w-full max-w-md bg-transparent backdrop-blur-xl border-none border-white/10 shadow-2xl text-white">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          Sign In
        </CardTitle>

        <CardDescription className="text-center text-white/60">
          Choose your preferred sign-in method
        </CardDescription>
      </CardHeader>

      <CardContent className="grid gap-4">
        <form action={handleGoogleSignIn}>
          <Button
            type="submit"
            variant="outline"
            className="w-full bg-transparent border-white/20 text-white hover:bg-white/10"
          >
            <Chrome className="mr-2 h-4 w-4" />
            Sign in with google
          </Button>
        </form>

        <form action={handleGithubSignIn}>
          <Button
            type="submit"
            variant="outline"
            className="w-full bg-transparent border-white/20 text-white hover:bg-white/10"
          >
            <Github className="mr-2 h-4 w-4" />
            Sign in with github
          </Button>
        </form>
      </CardContent>

      <CardFooter>
        <p className="text-sm text-center text-white/50 w-full">
          By signing in, you agree to our{" "}
          <a className="underline hover:text-white">Terms of Service</a> and{" "}
          <a className="underline hover:text-white">Privacy Policy</a>.
        </p>
      </CardFooter>
    </Card>
  );
};

export default SignInFormClient;
