import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { setCurrentStep } from "@/redux/slices/jewelleryFormSlice";
import { useAppSelector } from "@/redux/store";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";

export function FormNavigationButton() {
  const currentStep = useAppSelector(
    (store) => store.jewelleryForm.currentStep
  );

  const dispatch = useDispatch();

  return (
    <>
      <Separator orientation="horizontal" decorative className="my-10" />
      <div className="flex justify-between flex-wrap gap-4 items-baseline">
        {currentStep > 1 && (
          <Button
            type="button"
            onClick={() => dispatch(setCurrentStep(currentStep - 1))}
            variant={"outline"}
            className="space-x-2  max-sm:w-full"
          >
            <ArrowLeftIcon className="text-blue-600" size={20} />
            <span>Go Back</span>
          </Button>
        )}

        {currentStep < 8 && (
          <Button
            type="submit"
            className="bg-blue-600 text-white hover:bg-blue-400 space-x-2 max-sm:w-full"
            onClick={() => dispatch(setCurrentStep(currentStep + 1))}
          >
            <span>Next</span>
            <ArrowRightIcon className="text-blue-100 " size={20} />{" "}
          </Button>
        )}
      </div>
    </>
  );
}
