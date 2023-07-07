import SignIn from "@/components/user-signin";
import { BrainCog, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center">
      <Link href="/" passHref>
        <button
          type="button"
          className="absolute top-4 left-4 gap-1 hover:bg-slate-100/80 text-black/80 h-9 px-3 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
        >
          <ChevronLeft size={16} />
          Back
        </button>
      </Link>
      <div className="mx-auto flex flex-col items-center w-[350px] gap-1">
        <div className="flex flex-col items-center justify-center">
          <BrainCog />
          <h1 className="text-xl font-bold mb-6">Welcome back!</h1>
          <p className="text-sm text-black/60">
            Enter your credentials to Log-in
          </p>
        </div>
        <SignIn />
        <Link
          href="/register"
          className="text-center text-black/60 underline text-sm w-full"
        >
          Don't have an accout? Click here
        </Link>
      </div>
    </div>
  );
}
