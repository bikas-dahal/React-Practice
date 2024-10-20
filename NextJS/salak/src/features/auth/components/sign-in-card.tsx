import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SignInFlow } from "../types";
import { useState } from "react";

import { useAuthActions } from '@convex-dev/auth/react'
import { TriangleAlert } from 'lucide-react'



interface SignInProps {
    setState: (state: SignInFlow) => void
}

export const SignInCard = ({ setState }: SignInProps) => {

  const { signIn } = useAuthActions()

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [pending, setPending] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    const onPasswordSignIn = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setPending(true)
      signIn("password", { email, password, flow: "signIn" })
      .catch(() => {
        setError("Invalid email or password")
      })
      .finally(() => {
        setPending(false)
      })
    }

  const onProviderSignIn = (value: "github" | "google") => {
    setPending(true)
    signIn(value)
    .finally(() => {
      setPending(false)
    })
  }

  return (
    <Card className="w-full h-full p-6">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Login to continue</CardTitle>
        <CardDescription>
          Use your email or another service to continue
        </CardDescription>
      </CardHeader>
      {!!error && (
        <div className="text-red-500 bg-destructive/15 mb-4 rounded-md flex items-center gap-x-2 p-3 text-sm">
          <TriangleAlert className="size-5" />
          <p>{error}</p>
        </div>
      )}
      <CardContent className="space-y-4 px-0 pb-0">
        <form onSubmit={onPasswordSignIn} className="space-y-2.5">
          <Input
            type="email"
            placeholder="Email"
            className="w-full"
            id="email"
            name="email"
            disabled={pending}
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            className="w-full"
            id="password"
            name="password"
            disabled={pending}
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
            required
          />
          <Button type="submit" className="w-full" size={"lg"} disabled={pending}>
            Continue
          </Button>
        </form>
        <Separator />
        <div className="flex flex-col gap-y-2">
          <Button
            variant={"outline"}
            disabled={pending}
            onClick={() => {onProviderSignIn('google')}}
            size={"lg"}
            className="w-full relative"
          >
            {" "}
            <FcGoogle className="absolute top-2.5 left-2.5 size-5" /> Continue
            with Google
          </Button>
          <Button
            variant={"outline"}
            disabled={pending}
            onClick={() => {onProviderSignIn('github')}}
            size={"lg"}
            className="w-full relative"
          >
            {" "}
            <FaGithub className="absolute top-2.5 left-2.5 size-5" /> Continue
            with Github
          </Button>
        </div>
        <p className="text-muted-foreground text-sm">
          Don&apos;t have an account?{" "}
          <span className="text-sky-900 hover:underline cursor-pointer" onClick={() => setState("signUp")}>
            Sign Up
          </span>
        </p>
      </CardContent>
    </Card>
  );
};
