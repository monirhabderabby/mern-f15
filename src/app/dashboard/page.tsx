import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const Page = async () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Students</CardTitle>
              <CardDescription></CardDescription>
            </div>
            <Button asChild>
              <Link href="/dashboard/new-user">Add Student</Link>
            </Button>
          </div>
        </CardHeader>

        <CardContent>fsdf</CardContent>
      </Card>
    </div>
  );
};

export default Page;
