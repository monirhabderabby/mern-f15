import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getLeaderboard, LeaderboardType } from "@/helper/leaderboard";
import { LeaderboardTable } from "./_components/leaderboard-table";

export default async function Home() {
  const leaderboard: LeaderboardType = await getLeaderboard();

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

        <LeaderboardTable leaderboard={leaderboard} />
      </Card>
    </div>
  );
}
