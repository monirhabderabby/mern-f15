"use client";
import { createMark } from "@/actions/marks";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { marksCreateForm, MarksCreateFormType } from "@/schemas/marks";
import { zodResolver } from "@hookform/resolvers/zod";
import { Assignment, User } from "@prisma/client";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface Props {
  users: User[];
  assignments: Assignment[];
}

export default function MarksCreateForm({ users, assignments }: Props) {
  const [pending, startTransition] = useTransition();
  const form = useForm<MarksCreateFormType>({
    resolver: zodResolver(marksCreateForm),
  });

  function onSubmit(values: MarksCreateFormType) {
    startTransition(() => {
      createMark(values).then((res) => {
        if (!res.success) {
          toast.error(res.message);
          return;
        }
        toast.success(res.message);
        form.reset({
          userId: "",
          assignmentId: "",
          marks: undefined,
        });
      });
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto py-10"
      >
        <FormField
          control={form.control}
          name="userId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>User</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select user" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {users.map(({ id, name }) => (
                    <SelectItem value={id} key={id}>
                      {name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="assignmentId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Assignment</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Assignment" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {assignments.map(({ id, title }) => (
                    <SelectItem value={id} key={id}>
                      {title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="marks"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Marks</FormLabel>
              <FormControl>
                <Input placeholder="Write marks" type="number" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={pending}>
          Submit
        </Button>
      </form>
    </Form>
  );
}
