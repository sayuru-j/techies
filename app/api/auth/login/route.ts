import { CreateAccount } from "@/controllers/account";
import { signJwtAccessToken } from "@/lib/jwt";
import prisma from "@/lib/prisma";
import * as bcrypt from "bcrypt";

interface RequestBody {
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });

  if (user && (await bcrypt.compare(body.password, user.encrypted_password!))) {
    const { encrypted_password, ...userWithoutPass } = user;

    // Access token creation
    const access_token = signJwtAccessToken(userWithoutPass);

    // Account creation
    CreateAccount({
      id: user.id,
      access_token,
      emailVerified: user.emailVerified as Date,
    });

    const result = {
      ...userWithoutPass,
      access_token,
    };

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } else {
    return new Response(JSON.stringify({ error: "Invalid credentials" }), {
      status: 401,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
