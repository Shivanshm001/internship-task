'use client';
import React, { useState } from "react";
import { IStep } from "../../_utils/IStep";
import {
  GiBigDiamondRing,
  GiDropEarrings,
  GiPearlNecklace,
  GiPendantKey,
} from "react-icons/gi";
import { FaRing } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { FormNavigationButton } from "./FormNavigationButton";
const typeOptions = [
  { option: "rings", icon: <GiBigDiamondRing className="size-[60px]"/> },
  { option: "necklaces", icon: <GiPearlNecklace className="size-[60px]"/> },
  { option: "pendants", icon: <GiPendantKey className="size-[60px]"/> },
  { option: "bracelets", icon: <FaRing className="size-[60px]"/> },
  { option: "earrings", icon: <GiDropEarrings className="size-[60px]"/> },
];
export function TypeOfJewelleryForm(step: IStep) {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <form>
      <div className="flex flex-wrap justify-evenly gap-x-4 gap-y-8">
        {typeOptions.map(({ icon, option }) => (
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
                name="typeOfJwellery"
                id={option}
                checked={selectedOption === option}
                onChange={() => setSelectedOption(option)}
                className="hidden"
              />
              <div className={cn("text-blue-600", selectedOption === option && "text-white")}>
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
