"use client";

import { MainNavItem } from "@/types";
import Link from "next/link";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export default function MainNav({ items, children }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <span className="hidden font-bold sm:inline-block">TECHIES</span>
      </Link>
      {items?.length ? (
        <nav className="gap-6 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={`flex items-center text-lg font-semibold transition-colors hover:text-foreground/80 sm:text-sm ${
                item.disabled && "opacity-50"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
