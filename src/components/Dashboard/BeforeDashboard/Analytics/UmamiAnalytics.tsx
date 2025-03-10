import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Settings,
  User,
  LogOut,
  Bell,
  Mail,
  Home,
  FileText,
  MoreHorizontal,
} from "lucide-react";

import { AnimatedDropdown, DropdownItem } from "@/components/ui/dropdown";

export function UmamiAnalytics() {
  return (
    <div className="container flex flex-col items-center gap-2 w-full">
      <AnimatedDropdown className="w-full" align="center" width={"full"}>
        <DropdownItem>
          <iframe
            src={
              "https://umami-gkgo0gscg8kc88oowcgg8css.coolify.contentflo.io/share/WRXcIEVXKdPSCRwf/contentflo.io"
            }
            loading="lazy"
            style={{
              width: "100%",
              height: "calc(80vh - 50px)",
              border: "none",
              verticalAlign: "middle",
            }}
          />
        </DropdownItem>
      </AnimatedDropdown>
    </div>
  );
}
