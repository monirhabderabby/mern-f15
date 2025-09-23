import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getLeaderboard, LeaderboardType } from "@/helper/leaderboard";

export default async function Home() {
  const leaderboard: LeaderboardType = await getLeaderboard();

  // Example: leaderboard = [{ name: "Alice", marks: 95 }, { name: "Bob", marks: 90 }, ...]

  const getSymbol = (index: number) => {
    switch (index) {
      case 0:
        return "🥇"; // gold medal
      case 1:
        return "🥈"; // silver medal
      case 2:
        return "🥉"; // bronze medal
      default:
        return "";
    }
  };

  return (
    <div className="container mx-auto py-10 space-y-10">
      <h1 className="font-medium">Leaderboard - MERN F15</h1>

      <Card className="shadow-none">
        <CardHeader>
          <CardTitle>Final leaderboard - MERN F15</CardTitle>
          <CardDescription>
            Only assignment marks are added to the final result. The final
            leaderboard of the course based on assignment marks is given below –
          </CardDescription>
        </CardHeader>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-100 dark:bg-white/10 text-left">
                <th className="px-4 py-2 border text-center">Rank</th>
                <th className="px-4 py-2 border text-center">Name</th>
                <th className="px-4 py-2 border text-center">Academy</th>
                <th className="px-4 py-2 border text-center">Marks</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((student, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 dark:hover:bg-white/5 text-center"
                >
                  <td className="px-4 py-2 border font-medium">
                    {index + 1} {getSymbol(index)}
                  </td>
                  <td className="px-4 py-2 border text-center">
                    {student.name}
                  </td>
                  <td className="px-4 py-2 border text-center">
                    {student.academyName}
                  </td>
                  <td className="px-4 py-2 border text-center">
                    {student.totalMarks}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
