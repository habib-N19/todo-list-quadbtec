"use client";
import React from "react";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { addToDo } from "@/redux/features/to-do/todoSlice";

const FormSchema = z.object({
    task: z.string().min(1, {
        message: "Task is required",
    }),
});

export default function TaskInput() {
    const dispatch = useAppDispatch();
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            task: "",
        },
    });
    const onSubmit = (data: z.infer<typeof FormSchema>) => {
        dispatch(addToDo({ task: data.task }));
    };
    return (
        <Form {...form}>
            <form
                className="flex justify-center items-center gap-2  w-full"
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <FormField
                    control={form.control}
                    name="task"
                    render={({ field }) => (
                        <FormItem className="flex w-full items-center justify-between gap-2">
                            <FormControl>
                                <Input className="py-2" placeholder="Add Task" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button className="py-2" type="submit">
                    Add Task
                </Button>
            </form>
        </Form>
    );
}
