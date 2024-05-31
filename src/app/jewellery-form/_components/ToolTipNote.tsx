import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BadgeHelpIcon } from "lucide-react";
import React from "react";

export default function ToolTipNote({ note }: { note: string }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild={true}>
          <Button variant={"ghost"} size={"icon"}>
            <BadgeHelpIcon />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{note}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
