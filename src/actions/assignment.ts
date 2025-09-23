"use server";

import prisma from "@/lib/prisma";
import {
  assignmentFormSchema,
  AssignmentFormSchemaType,
} from "@/schemas/assignment";

export async function createAssignment(data: AssignmentFormSchemaType) {
  const parsed = assignmentFormSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      message: "Invalid input data",
      errors: parsed.error.message,
    };
  }

  const { title, description, subject } = parsed.data;

  try {
    const res = await prisma.assignment.create({
      data: {
        title,
        subject,
        description,
      },
    });

    return {
      success: true,
      message: "Assignment created successfully",
      assignment: res,
    };
  } catch (error) {
    console.error("Error creating assignment:", error);
    return {
      success: false,
      message: "Failed to create assignment",
    };
  }
}
