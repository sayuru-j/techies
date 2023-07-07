import { TrendingUp } from "lucide-react";
import React from "react";

function Trending() {
  return (
    <div className="min-h-[60vh] bg-slate-50 rounded lg:rounded-none py-5 px-2">
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold inline-flex items-center w-full md:justify-normal justify-center">
          Trending
          <TrendingUp className="ml-2" size={25} strokeWidth={2} />
        </h1>
      </div>
    </div>
  );
}

export default Trending;
