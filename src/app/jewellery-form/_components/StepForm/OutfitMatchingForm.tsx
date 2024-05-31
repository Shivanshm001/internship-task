"use client";
import React, { useState } from "react";
import { IStep } from "../../_utils/IStep";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FormNavigationButton } from "./FormNavigationButton";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ImagePlusIcon } from "lucide-react";
import Image from "next/image";

export function OutfitMatchingForm(step: IStep) {
  const [choice, setChoice] = useState("no");
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setFile(e.target.files[0]);
      setFileUrl(URL.createObjectURL(e.target.files[0]));
    } else {
      setFile(null);
      setFileUrl(null);
    }
  }
  return (
    <form>
      <div className="flex justify-between gap-x-4">
        <Button
          type="button"
          variant={"outline"}
          onClick={() => setChoice("yes")}
          className={cn(
            "w-full active:scale-90",
            choice === "yes" ? "bg-blue-600 text-white" : "bg-gray-200"
          )}
        >
          <span>Yes</span>
        </Button>
        <Button
          type="button"
          variant={"outline"}
          onClick={() => setChoice("no")}
          className={cn(
            "w-full active:scale-90",
            choice === "no" ? "bg-blue-600 text-white" : "bg-gray-200"
          )}
        >
          <span>No</span>
        </Button>
      </div>

      <div>
        {choice === "yes" && (
          <div>
            <Separator orientation="horizontal" decorative className="my-10" />
            <Button
              type="button"
              variant={"secondary"}
              className="active:scale-90  bg-gray-200 border cursor-pointer"
              asChild
            >
              <Label htmlFor="image" className="space-x-4">
                <span>Choose an image</span>
                <ImagePlusIcon />
              </Label>
            </Button>
            <Input
              type="file"
              name="image"
              id="image"
              placeholder="Choose an image"
              onChange={handleFile}
              className="hidden"
            />
          </div>
        )}
      </div>
      <div>
        {file && (
          <>
            <Separator orientation="horizontal" decorative className="my-10" />
            <div
              className={cn(
                "m-4 border rounded-2xl w-full shadow-lg shadow-gray-200 overflow-hidden"
              )}
            >
              <Image src={fileUrl!} alt={file.name} className="" width={"500"} height={"500"} />
            </div>
          </>
        )}
      </div>
      <FormNavigationButton />
    </form>
  );
}
