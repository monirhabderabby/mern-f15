// leaderboard.ts

import prisma from "@/lib/prisma";

export async function getLeaderboard() {
  const leaderboard = await prisma.user.findMany({
    where: { role: "student" },
    select: {
      id: true,
      name: true,
      marks: {
        select: {
          marks: true,
          assignment: {
            select: { title: true },
          },
        },
      },
      academyName: true,
    },
  });

  // calculate total marks per student
  return leaderboard
    .map((student) => ({
      id: student.id,
      name: student.name,
      academyName: student.academyName,
      totalMarks: student.marks.reduce((sum, m) => sum + m.marks, 0),
      assignments: student.marks,
    }))
    .sort((a, b) => b.totalMarks - a.totalMarks); // sort high to low
}

export type LeaderboardType = Awaited<ReturnType<typeof getLeaderboard>>;
