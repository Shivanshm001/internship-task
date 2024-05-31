"use client";
import React, { useState } from "react";
import { IStep } from "../../_utils/IStep";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormNavigationButton } from "./FormNavigationButton";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function ReligionForm(step: IStep) {
  const [religion, setReligion] = useState("None");
  const [otherReligion, setOtherReligion] = useState("");
  return (
    <form className="flex flex-col justify-between h-[50vh]">
      <Select defaultValue="None" disabled={religion === "Other"}>
        <SelectTrigger>
          <SelectValue placeholder="Select a religion preference." />
        </SelectTrigger>
        <SelectContent>
          {step.options.map((option) => (
            <SelectItem key={option} value={option} id={option} className="capitalize" onChange={() => setReligion(option)}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {
        religion === "Other" &&
        <div>
      <Separator orientation="horizontal" decorative className="my-10" />
        <Input
          type="text"
          id="other-religion"
          name="other-religion"
          value={otherReligion}
          placeholder="Enter religion"
          onChange={(e) => setOtherReligion(e.target.value)}
        />
      </div>
      }
      <FormNavigationButton />
    </form>
  );
}
