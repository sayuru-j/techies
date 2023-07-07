import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <div className="grid md:grid-cols-2 min-h-[50vh] mb-20 container mx-auto">
      <div className="flex flex-col gap-4 mt-14">
        <div className="border-[2px] w-28 border-slate-900 mb-4" />
        <h1 className="text-[50px] font-bold">
          Unlo<span className="text-orange-500">c</span>k th
          <span className="text-orange-500">e</span> Future{" "}
          <span className="text-orange-500">o</span>f Tech
        </h1>
        <p className="text-[20px] font-medium">
          Discover Innovative Gadgets at our Store!
        </p>
        <p className="text-black/40">
          Step into a world of limitless possibilities as we bring you the
          latest in tech gadgets. Embrace innovation, enhance productivity, and
          redefine entertainment with our curated collection.
        </p>
        <p className="font-medium text-slate-900">
          Used by more than 1000 users around Sri Lanka.
        </p>
        <div className="flex items-center justify-between w-full max-w-[16rem] mt-10">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded font-semibold text-sm text-white bg-slate-900 py-4 px-4 h-10 w-40 uppercase"
          >
            Explore
          </button>
          <a href="/aboutus" className="text-sm underline">
            About us?
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <Image
          className="object-contain pointer-events-none"
          src="https://illustrations.popsy.co/amber/app-launch.svg"
          alt="Hero"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
