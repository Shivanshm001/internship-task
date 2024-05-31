"use client";
import { IStep } from "../../_utils/IStep";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { FormNavigationButton } from "./FormNavigationButton";
import { IoMale, IoMaleFemale, IoFemale } from "react-icons/io5";
const genderOptions = [
  { option: "male", icon: <IoMale className="size-[60px]"/> },
  { option: "female", icon: <IoFemale className="size-[60px]"/> },
  { option: "other", icon: <IoMaleFemale className="size-[60px]"/> },
];


export function GenderFrom(step: IStep) {
  const [selectedOption, setSelectedOption] = useState("male");
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-wrap justify-evenly gap-4">
        {genderOptions.map(({ icon, option }) => (
          <Button
            type="button"
            variant={"outline"}
            asChild
            className="active:scale-90"
          >
            <Label
              htmlFor={option}
              className={cn(
                "flex flex-col gap-2 justify-center items-center cursor-pointer p-4 border flex-shrink-0 size-36 rounded-2xl",
                selectedOption === option && "bg-blue-600 text-white"
              )}
            >
              <Input
                type="radio"
                name="gender"
                id={option}
                checked={selectedOption === option}
                onChange={() => setSelectedOption(option)}
                className="hidden"
              />
              <div>
                {icon}
              </div>
              <p className="inline-block capitalize">{option}</p>
            </Label>
          </Button>
        ))}
      </div>
      <FormNavigationButton />
    </form>
  );
}
