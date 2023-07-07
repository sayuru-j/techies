import prisma from "@/lib/prisma";

interface AccountCreationProps {
  id: string;
  emailVerified?: Date;
  access_token?: string;
}

export async function CreateAccount({
  access_token,
  emailVerified,
  id,
}: AccountCreationProps) {
  // Account creation
  if (emailVerified) {
    const accountExists = await prisma.account.findFirst({
      where: {
        userId: id,
      },
    });

    // Create an account if it doesn't exist
    if (!accountExists) {
      try {
        const expires_at = Date.now() + 60 * 60 * 1000;

        const account = await prisma.account.create({
          data: {
            userId: id,
            type: "account",
            provider: "credentials",
            providerAccountId: id,
            access_token: access_token,
            expires_at,
            token_type: "Bearer",
          },
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const account = await prisma.account.findFirst({
          where: {
            userId: id,
          },
        });

        if (account) {
          const updateToken = await prisma.account.update({
            where: {
              id: account.id,
            },
            data: {
              access_token: access_token,
            },
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
}
