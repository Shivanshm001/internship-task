import React from "react";
import steps from "./_utils/steps.json";
import Step from "./_components/Step";
import { StepForm } from "./_components/StepForm/StepForm";
import { Input } from "@/components/ui/input";

export default function JewelleryFormPage() {
  return (
    <div className="bg-blue-50 min-h-screen p-4">
      <div className="mx-auto w-full max-w-5xl p-4 bg-white border border-gray-200 rounded-lg shadow grid grid-cols-12 gap-4 min-h-[90vh]">
        {/* Steps  */}
        <div className="rounded-xl col-span-full md:col-span-4 bg-blue-600 p-10 md:flex flex-row justify-between hidden md:flex-col md:justify-start gap-6 flex-wrap">
          {steps.map((step) => (
            <Step {...step} key={step.id} />
          ))}
        </div>
        {/* Form  */}
        <div className="rounded-lg col-span-full md:col-span-8">
          <StepForm />
        </div>
      </div>
    </div>
  );
}
