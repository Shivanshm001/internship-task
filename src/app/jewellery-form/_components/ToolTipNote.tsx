import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BadgeInfoIcon } from "lucide-react";
import React from "react";

export default function ToolTipNote({ note }: { note: string }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant={"ghost"} size={"icon"}>
            <BadgeInfoIcon />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{note}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
