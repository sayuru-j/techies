"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/UI/dropdown-menu";
import { User } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

import Link from "next/link";

export default function SignInButton() {
  const { data: session, status } = useSession();

  if (session && session.user)
    return (
      <div className="flex items-center justify-between">
        {session?.user && (
          <DropdownMenu>
            <DropdownMenuTrigger>
              {session?.user?.image ? (
                <Image
                  className="rounded-full w-8 h-8 object-cover pointer-events-none"
                  width={100}
                  height={100}
                  src={session?.user?.image as string}
                  alt="Display Picture"
                />
              ) : (
                <User
                  size={18}
                  className="pointer-events-none focus:border-none"
                />
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white" align="end">
              <div className="flex items-center justify-start gap-2 p-2">
                <div className="flex flex-col space-y-1 leading-none">
                  {session?.user?.name && (
                    <p className="font-medium">{session?.user?.name}</p>
                  )}
                  {session?.user?.email && (
                    <p className="w-[200px] truncate text-sm text-black/80">
                      {session?.user?.email}
                    </p>
                  )}
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/dashboard">Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer"
                onSelect={(event) => {
                  event.preventDefault();
                  signOut({
                    callbackUrl: `${window.location.origin}/login`,
                  });
                }}
              >
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
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
