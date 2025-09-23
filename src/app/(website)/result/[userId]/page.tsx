import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

// ✅ Revalidate every 60s (ISR) or remove this for true static
export const revalidate = 60;

// ✅ Pre-generate all user pages
export async function generateStaticParams() {
  const users = await prisma.user.findMany({
    select: { id: true },
  });

  return users.map((user) => ({
    userId: user.id,
  }));
}

const Page = async ({ params }: { params: { userId: string } }) => {
  const user = await prisma.user.findUnique({
    where: {
      id: params.userId,
    },
    include: {
      marks: {
        select: {
          marks: true,
          assignment: {
            select: { title: true },
          },
        },
      },
    },
  });

  if (!user) notFound();

  return (
    <div className="container mx-auto py-10 space-y-8">
      <Card className="shadow-none">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            {user.name} | {user.academyName}
          </CardTitle>
          <CardDescription>
            Assignment-wise marks for{" "}
            <span className="font-medium">{user.name}</span>
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="px-4 py-2 border">Assignment</th>
                  <th className="px-4 py-2 border">Marks</th>
                </tr>
              </thead>
              <tbody>
                {user.marks.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border">
                      {item.assignment.title}
                    </td>
                    <td className="px-4 py-2 border">{item.marks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
