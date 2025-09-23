import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const Page = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Assignment</CardTitle>
          <Button>
            <Link href="/dashboard/assignment/new">Add Assignment</Link>
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
};

export default Page;
