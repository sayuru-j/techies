"use client";
import HeroSection from "@/components/hero-section";
import Services from "@/components/services";
import Trending from "@/components/trending";
import { useSession } from "next-auth/react";

export default function Landing() {
  const { data: session, status } = useSession();

  return (
    <div>
      <HeroSection />
      <Trending />
      <Services />
    </div>
  );
}
