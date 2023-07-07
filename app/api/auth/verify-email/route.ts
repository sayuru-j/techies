import prisma from "@/lib/prisma";

interface RequestBody {
  email: string;
  verified: boolean;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  if (body.verified) {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });

    if (user?.emailVerified !== null)
      return new Response(JSON.stringify({ error: "Already verified" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      });

    if (body.verified && user?.emailVerified === null) {
      try {
        const result = await prisma.user.update({
          where: {
            email: body.email,
          },
          data: {
            emailVerified: new Date().toISOString(),
          },
        });

        if (result)
          return new Response(
            JSON.stringify({
              status: `${body.email} is verified successfully`,
            }),
            {
              status: 200,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
      } catch (error) {
        console.log(error);
      }
    }
  }
}
