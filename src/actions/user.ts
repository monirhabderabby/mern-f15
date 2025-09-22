"use server";

import prisma from "@/lib/prisma";
import { userSchema, UserSchemaType } from "@/schemas/user";

export async function createUserAction(data: UserSchemaType) {
  try {
    // validate incoming data
    const parsed = userSchema.safeParse(data);

    if (!parsed.success) {
      return {
        success: false,
        message: "Invalid input data",
        errors: parsed.error.message,
      };
    }

    // check if user already exists
    const exists = await prisma.user.findUnique({
      where: {
        email: parsed.data.email,
      },
    });

    if (exists) {
      return {
        success: false,
        message: "User with this email already exists",
      };
    }

    // create user
    const user = await prisma.user.create({
      data: {
        name: parsed.data.name,
        email: parsed.data.email,
        academyName: parsed.data.academyName,
      },
    });

    return {
      success: true,
      message: "User created successfully",
      user,
    };
  } catch (error) {
    console.error("Error creating user:", error);
    return {
      success: false,
      message: "An unexpected error occurred",
    };
  }
}
