import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";
import ItemForm from "./item-form";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

interface Item {
  _id: string;
}

export default async function Items() {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login" || authOptions.pages?.signIn);
  }

  const products = await prisma.item.findMany({});

  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-16">
      {products.map((product) => (
        <div key={product.id} className="group relative">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
            <Image
              src={product.image_url}
              alt={product.name}
              width={1000}
              height={1000}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm font-semibold text-gray-700">
                <a href={product.name}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.category}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">
              ${product.price}
            </p>
          </div>
          <div className="absolute rounded left-0 top-0 py-2 px-4 gap-2 inline-flex items-center justify-center bg-slate-50/70 text-sm">
            Add to cart
            <ShoppingCart size={20} />
          </div>
        </div>
      ))}
    </div>
  );
}
