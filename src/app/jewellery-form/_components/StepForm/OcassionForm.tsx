  "use client";
  import {
    Select,
    SelectValue,
    SelectContent,
    SelectTrigger,
    SelectItem,
  } from "@/components/ui/select";
  import React, { useState } from "react";
  import { IStep } from "../../_utils/IStep";
  import { Input } from "@/components/ui/input";
  import { Separator } from "@/components/ui/separator";
  import { Label } from "@/components/ui/label";
  import { FormNavigationButton } from "./FormNavigationButton";

  export function OcassionForm(step: IStep) {
    const [otherOcassion, setOtherOcassion] = useState(false);
    const [otherOcassionValue, setOtherOcassionValue] = useState("");

    return (
      <form className="space-y-8">
        <Select>
          <SelectTrigger disabled={otherOcassion}>
            <SelectValue placeholder="What is the occassion?" />
          </SelectTrigger>
          <SelectContent>
            {step.options.map((option) => (
              <SelectItem value={option} className="capitalize" >
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Separator orientation="horizontal" decorative />
        <div>
          <Label htmlFor="other-occasion" className="mb-2 font-semibold text-sm">
            Is it something else?
          </Label>
          <Input
            type="text"
            placeholder="Enter custom occasion"
            name="other-occasion"
            id="other-occasion"
            value={otherOcassionValue}
            onChange={(e) => setOtherOcassionValue(e.target.value)}
            onFocus={() => setOtherOcassion(true)}
            onBlur={() => setOtherOcassion(false)}
          />
        </div>
        <FormNavigationButton />
      </form>
    );
  }
