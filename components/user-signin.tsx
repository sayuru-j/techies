"use client";
import { signIn, useSession } from "next-auth/react";
import { Input } from "./UI/input";
import { useEffect, useRef, useState } from "react";
import { Loader2, LogIn } from "lucide-react";
import { useRouter } from "next/navigation";
import * as Toast from "@radix-ui/react-toast";

export default function SignIn() {
  const { data: session, status } = useSession();
  const email = useRef("");
  const password = useRef("");
  const router = useRouter();

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      email: email.current,
      password: password.current,
      redirect: true,
    });
  };

  useEffect(() => {
    if (status === "authenticated") router.push("/");
  }, [session]);

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className="flex flex-col">
        <div className="">
          <label className="pl-1 text-xs" htmlFor="email">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
            onChange={(event) => (email.current = event.target.value)}
          />
        </div>
        <div>
          <label className="pl-1 text-xs" htmlFor="email">
            Password
          </label>
          <Input
            type="password"
            onChange={(event) => (password.current = event.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-black/80 hover:bg-black text-white h-10 px-3 my-3 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
        >
          {status === "loading" ? (
            <Loader2 className="animate-spin" />
          ) : (
            "Log In"
          )}
        </button>

        <div className="relative my-2">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-black/60">
              Or continue with
            </span>
          </div>
        </div>

        <button
          onClick={() =>
            signIn("google", {
              redirect: true,
              callbackUrl: "/",
            })
          }
          type="button"
          className="hover:bg-black/10 bg-white text-black border h-10 px-3 my-3 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
        >
          {status === "loading" ? (
            <Loader2 className="animate-spin" />
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />{" "}
              </svg>
              <span className="pl-2">Google</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
