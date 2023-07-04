"use client";
import { useSession } from "next-auth/react";

export default function Landing() {
  const { data: session, status } = useSession();

  console.log(session, status);
  return <div className="">Landing</div>;
}
