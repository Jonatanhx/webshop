"use server";

import { signIn } from "@/auth";
import { prisma } from "../../lib/prisma";

export async function signInCredentialsUser(data: {
  email: string;
}): Promise<string | null> {
  const user = await prisma.user.findUnique({ where: { email: data.email } });

  if (!user) {
    return null;
  }

  await signIn("credentials", {
    email: data.email,
    name: user?.name,
    id: user?.id,
  });

  return "success";
}
