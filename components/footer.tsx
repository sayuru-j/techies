import { Heart, LucideInfinity } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-4 md:items-start items-center justify-between py-10">
      <div className="w-3/4 md:flex items-center gap-4 hidden">
        <Heart size={20} />
        <h1 className="text-sm">
          Made with{" "}
          <a
            href="https://nextjs.org/"
            className="font-semibold border-b-[2px] pb-[1px] border-black/50"
          >
            Next.js
          </a>
          ,Hosted on{" "}
          <a
            href="https://vercel.com/dashboard"
            className="font-semibold border-b-[2px] pb-[1px] border-black/50"
          >
            Vercel
          </a>
          .Illustrations by{" "}
          <a
            href="https://app.popsy.co/"
            className="font-semibold border-b-[2px] pb-[1px] border-black/50"
          >
            Popsy
          </a>
          .Inspired by{" "}
          <a
            href="https://tx.shadcn.com/"
            className="font-semibold border-b-[2px] pb-[1px] border-black/50"
          >
            Taxonomy
          </a>
          .
        </h1>
      </div>
      <div className="w-full md:w-1/4 flex flex-col md:flex-row items-center md:justify-end gap-2">
        <LucideInfinity size={25} />
        <h1 className="text-sm">
          I'm{" "}
          <a
            href="https://sayurujithsara.com/"
            className="font-semibold border-b-[2px] pb-[1px] border-black/50"
          >
            Sayuru
          </a>
        </h1>
      </div>
    </div>
  );
}
