import prisma from "@/lib/prisma";
import MarksCreateForm from "./_components/mark-create-form";

const Page = async () => {
  const users = await prisma.user.findMany();
  const assignments = await prisma.assignment.findMany();
  return (
    <div>
      <MarksCreateForm users={users} assignments={assignments} />
    </div>
  );
};

export default Page;
