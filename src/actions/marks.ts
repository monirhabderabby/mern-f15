"use server";

import prisma from "@/lib/prisma";
import { marksCreateForm, MarksCreateFormType } from "@/schemas/marks";

export async function createMark(data: MarksCreateFormType) {
  const parsed = marksCreateForm.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      message: "Invalid input data",
      errors: parsed.error.message,
    };
  }

  const { userId, assignmentId, marks } = parsed.data;

  try {
    const res = await prisma.mark.create({
      data: {
        userId,
        assignmentId,
        marks: parseInt(marks),
      },
    });

    return {
      success: true,
      message: "Mark created successfully",
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
