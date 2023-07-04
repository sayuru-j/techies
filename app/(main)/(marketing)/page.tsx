"use client";
import { useSession } from "next-auth/react";

export default function Landing() {
  const { data: session, status } = useSession();

  return <div className="">Landing</div>;
}
