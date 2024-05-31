"use client";
import { IStep } from "../../_utils/IStep";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GemIcon, GiftIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FormNavigationButton } from "./FormNavigationButton";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

const giftOptions = [
  { option: "gift", icon: <GiftIcon size={60} /> },
  { option: "personal", icon: <GemIcon size={60} /> },
];
export function GiftOrPersonalPurchaseFrom(step: IStep) {
  const [selectedOption, setSelectedOption] = useState("personal");
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-wrap justify-evenly gap-4">
        {giftOptions.map(({ icon, option }) => (
          <div
            role="radio"
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
              <div className="font-extralight">{icon}</div>
              <p className="inline-block capitalize">{option}</p>
            </Label>
          </div>
        ))}
      </div>
      <FormNavigationButton />
    </form>
  );
}
