import { Lollipop } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Services() {
  return (
    <div className="container mx-auto min-h-[60vh] py-5">
      <h1 className="text-2xl font-bold inline-flex items-center">
        Services
        <Lollipop className="ml-2" size={25} strokeWidth={2.5} />
      </h1>
      <div className="grid grid-cols-4 py-4">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="https://assets.popsy.co/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ1FjIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f26b669ba8c234f4b123579d3fe95dbd08892856/image.png"
            alt="Money"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
