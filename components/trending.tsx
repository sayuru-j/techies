import { TrendingUp } from "lucide-react";
import React from "react";

function Trending() {
  return (
    <div className="min-h-[60vh] bg-slate-50 py-5">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold inline-flex items-center">
          Trending
          <TrendingUp className="ml-2" size={25} strokeWidth={2.5} />
        </h1>
      </div>
    </div>
  );
}

export default Trending;
