import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const NavButton = ({ label, active }) => (
    <Button 
      variant="ghost" 
      className={cn("mx-2", active && "bg-gray-200")}
    >
      {label}
    </Button>
  );
export default NavButton;
//issue with default and ouline colors