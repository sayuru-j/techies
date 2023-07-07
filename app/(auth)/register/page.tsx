import Link from "next/link";
import { Codesandbox, Hammer, Key } from "lucide-react";
import SignIn from "@/components/user-signin";
import { useSession } from "next-auth/react";

export default function RegisterPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-screen h-screen items-center">
      <div className="hidden md:flex h-full bg-slate-950 items-center justify-center">
        <Codesandbox className={`text-white animate-spin hover:scale-110`} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <Link href="/login" passHref>
          <button
            type="button"
            className="absolute top-4 right-4 gap-1 bg-slate-950 hover:bg-slate-950/80 text-white h-9 px-3 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
          >
            <Key size={16} />
            Login
          </button>
        </Link>
        <div className="mx-auto flex flex-col items-center w-[350px] gap-1">
          <div className="flex flex-col items-center justify-center">
            <Hammer />
            <h1 className="text-xl font-bold mb-6">Create an account</h1>
            <p className="text-sm text-black/60">
              Provide an email and a password
            </p>
          </div>
          <SignIn />
        </div>
      </div>
    </div>
  );
}
