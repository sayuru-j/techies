"use client";
import { User } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function SignInButton() {
  const { data: session, status } = useSession();

  if (session && session.user)
    return (
      <div className="flex items-center justify-between">
        <div className="flex items-center pr-4">
          {session?.user?.image ? (
            <Image
              className="rounded-full w-6 object-cover"
              width={100}
              height={100}
              src={session?.user?.image as string}
              alt="Display Picture"
            />
          ) : (
            <User size={18} />
          )}

          <h1 className="text-sm pl-1 font-semibold text-black/60">
            {session?.user?.name}
          </h1>
        </div>
        <button
          onClick={() => signOut()}
          type="button"
          className="bg-slate-100 hover:bg-slate-100/80 text-black/80 h-9 px-3 inline-flex items-center justify-center rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
        >
          Sign Out
        </button>
      </div>
    );

  return (
    <button
      onClick={() => signIn()}
      type="button"
      className="bg-slate-100 hover:bg-slate-100/80 text-black/80 h-9 px-3 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
    >
      Login
    </button>
  );
}
