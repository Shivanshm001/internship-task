"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";
import { FormNavigationButton } from "./FormNavigationButton";

const budgetGroups: string[] =  ["<$50", "$50-$100", "$100-$200", "$200+"];
const FormSchema = z.object({
  type: z.enum( ["<$50", "$50-$100", "$100-$200", "$200+"], {
    required_error: "You need to select an age group.",
  }),
});

export function BudgetForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onFormSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onFormSubmit)} className="">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <RadioGroup
                  defaultValue={field.value}
                  onValueChange={field.onChange}
                  className="flex gap-4 flex-wrap flex-col  justify-start"
                >
                  {
                    budgetGroups.map(group => (
                      <FormItem className="space-x-2 cursor-pointer p-1">
                        <FormControl>
                          <RadioGroupItem value={group} />
                        </FormControl>
                        <FormLabel className="cursor-pointer">{group}</FormLabel>
                      </FormItem>
                    ))
                  }
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormNavigationButton />
      </form>
    </Form>
  );
}
