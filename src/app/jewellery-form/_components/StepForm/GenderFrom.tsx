"use client";
import { IStep } from "../../_utils/IStep";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { FormNavigationButton } from "./FormNavigationButton";
import { IoMale, IoMaleFemale, IoFemale } from "react-icons/io5";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const FormSchema = z.object({
  genders: z.enum(["male", "female", "other"], {
    required_error: "Please select one.",
  }),
});

const genderOptions = [
  { option: "male", icon: <IoMale className="size-[60px]" /> },
  { option: "female", icon: <IoFemale className="size-[60px]" /> },
  { option: "other", icon: <IoMaleFemale className="size-[60px]" /> },
];

export function GenderFrom(step: IStep) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onFormSubmit(e: React.FormEvent) {
    e.preventDefault();
  }
  const [selectedOption, setSelectedOption] = useState("male");
  return (
    <Form {...form}>
      <form>
        <FormField
          control={form.control}
          name="genders"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <RadioGroup
                  defaultValue={field.value}
                  onValueChange={field.onChange}
                  className="flex flex-wrap gap-4"
                >
                  {genderOptions.map(({ option, icon }) => (
                    <Button
                      type="button"
                      variant={"outline"}
                      asChild
                      className="active:scale-90"
                    >
                      <FormLabel
                        htmlFor={option}
                        className={cn(
                          "flex flex-col gap-2 justify-center items-center cursor-pointer p-4 border flex-shrink-0 size-36 rounded-2xl",
                          field.value === "male" && "bg-blue-600 text-white"
                        )}
                      >
                        <RadioGroupItem value={option} className="hidden" />
                        <div>{icon}</div>
                        <p className="inline-block capitalize">{option}</p>
                      </FormLabel>
                    </Button>
                  ))}
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />
        <FormNavigationButton />
      </form>
    </Form>
  );
}
