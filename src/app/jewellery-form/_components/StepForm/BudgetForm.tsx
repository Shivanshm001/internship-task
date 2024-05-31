import React from "react";
import { IStep } from "../../_utils/IStep";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FormNavigationButton } from "./FormNavigationButton";
import { Separator } from "@/components/ui/separator";

export function BudgetForm(step: IStep) {
  return (
    <form>
      <RadioGroup defaultValue="18-25" required>
        <div className="flex gap-4 flex-wrap flex-col  justify-start">
            {
              step.options.map(option => <Button key={option} type="button" variant={"secondary"} asChild>
                <Label htmlFor={option} className="space-x-2">
                  <RadioGroupItem value={option} id={option} />
                  <span>{option}</span>
                </Label>
              </Button>)
            }
        </div>
      </RadioGroup>
      <FormNavigationButton />
    </form>
  );
}
