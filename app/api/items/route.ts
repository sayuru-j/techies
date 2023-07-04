import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  const allItems = await prisma.item.findMany({});

  return new Response(JSON.stringify(allItems), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
    statusText: "OK",
  });
}

export async function POST(request: Request) {
  return new Response("OK");
}
