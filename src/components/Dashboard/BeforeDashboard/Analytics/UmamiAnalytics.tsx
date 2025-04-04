import { AnimatedDropdown, DropdownItem } from "@/components/ui/dropdown";

export function UmamiAnalytics() {
  return (
    <div className=" flex flex-col items-center gap-2 w-full">
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
