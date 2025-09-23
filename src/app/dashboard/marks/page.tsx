import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const Page = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Marks</CardTitle>
          <Button>
            <Link href="/dashboard/marks/new">Add Mark</Link>
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
};

export default Page;
