"use server";

import { prisma } from "../lib/prisma";
import { RegisterInputs } from "../src/types";

export async function registerUser(data: RegisterInputs) {
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!existingUser && data.email && data.firstName && data.lastName) {
      const fullName = data.firstName + " " + data.lastName;
      await prisma.user.create({
        data: {
          name: fullName,
          email: data.email,
        },
      });
    }
  } catch (err) {
    console.error("Failed to register user", err);
  }
}
