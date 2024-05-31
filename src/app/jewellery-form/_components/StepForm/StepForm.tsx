"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";
import steps from "../../_utils/steps.json";
import { OcassionForm } from "./OcassionForm";
import { GiftOrPersonalPurchaseFrom } from "./GiftOrPersonalPurchaseFrom";
import { GenderFrom } from "./GenderFrom";
import { AgeGroupForm } from "./AgeGroupForm";
import { ReligionForm } from "./ReligionForm";
import { TypeOfJewelleryForm } from "./TypeOfJewelleryForm";
import { BudgetForm } from "./BudgetForm";
import { OutfitMatchingForm } from "./OutfitMatchingForm";
import { IStep } from "../../_utils/IStep";
import { Tooltip } from "@/components/ui/tooltip";
import ToolTipNote from "../ToolTipNote";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "@/redux/store";

function renderForm(currentStep: number, step: IStep): React.ReactNode {
  switch (currentStep) {
    case 1:
      return <OcassionForm {...step} />;
    case 2:
      return <GiftOrPersonalPurchaseFrom {...step} />;
    case 3:
      return <GenderFrom {...step} />;
    case 4:
      return <AgeGroupForm {...step} />;
    case 5:
      return <ReligionForm {...step} />;
    case 6:
      return <TypeOfJewelleryForm {...step} />;
    case 7:
      return <BudgetForm {...step} />;
    case 8:
      return <OutfitMatchingForm {...step} />;
    default:
      return <></>;
  }
}
export function StepForm() {
  const currentStep = useAppSelector(
    (store) => store.jewelleryForm.currentStep
  );

  return (
    <div className="container min-h-full p-8">
      <Card className="border-none">
        <CardHeader>
          <CardTitle className="flex justify-between">
            <h1 className="text-3xl tracking-wide">
              {steps[currentStep - 1].title}
            </h1>

            <div className="text-sm font-light">
              <ToolTipNote note={steps[currentStep - 1].note} />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <p>{steps[currentStep - 1].description}</p>
          </CardDescription>
          <Card className="border-none">
            {/* children -> form */}
            <CardHeader>
              {renderForm(currentStep, steps[currentStep - 1])}
            </CardHeader>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
