"use client";
import { cn } from "@/lib/utils";
import { useAppSelector } from "@/redux/store";
import React, { useState } from "react";

interface IStepProps {
  id: number;
  title: string;
}
export default function Step({ id, title }: IStepProps) {
  const currentStep = useAppSelector(
    (store) => store.jewelleryForm.currentStep
  );
  return (
    <div className="flex flex-col md:flex-row items-center gap-5">
      <div
        className={cn(
          "size-12 text-slate-50 border border-slate-50 rounded-full flex items-center justify-center text-xl flex-shrink-0",
          id === currentStep && "bg-blue-300 border-0 text-blue-600"
        )}
      >
        {id}
      </div>
      <div className="flex-col flex  justify-center">
        <h4 className="text-slate-200 text-sm uppercase ">Step {id}</h4>
        <h3
          className={cn(
            "uppercase text-lg text-white",
            id === currentStep && "font-bold"
          )}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}
