// components/LeaderboardTable.tsx
"use client";

import { LeaderboardType } from "@/helper/leaderboard";
import { useRouter } from "next/navigation";

export function LeaderboardTable({
  leaderboard,
}: {
  leaderboard: LeaderboardType;
}) {
  const router = useRouter();

  const getSymbol = (index: number) => {
    switch (index) {
      case 0:
        return "🥇";
      case 1:
        return "🥈";
      case 2:
        return "🥉";
      default:
        return "";
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border  rounded-lg">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-100/10 text-left">
            <th className="px-4 py-2 border">Rank</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Marks</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((student, index) => (
            <tr
              key={student.id}
              className="hover:bg-gray-50 dark:hover:bg-gray-50/5 cursor-pointer"
              onClick={() => router.push(`/result/${student.id}`)}
            >
              <td className="px-4 py-2 border font-medium">
                {index + 1} {getSymbol(index)}
              </td>
              <td className="px-4 py-2 border">{student.name}</td>
              <td className="px-4 py-2 border">{student.totalMarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
