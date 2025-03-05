"use client";
import * as LucideIcons from "lucide-react";
import { useField, FieldLabel } from "@payloadcms/ui";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface IconPickerFieldProps {
  path: string;
  field: {
    label: string;
    required: boolean;
  };
}

// Define the list of allowed icons
export const ALLOWED_ICONS = [
  "BadgeCheck",
  "Globe",
  "Database",
  "Paintbrush",
  "Ruler",
  "Edit",
  "Zap",
  "Layers",
  "LifeBuoy",
  "ShoppingBag",
  "Puzzle",
  "Lock",
  "Palette",
  "ShieldCheck",
  "Calendar",
  "Rocket",
  "Handshake",
  "Sparkles",
] as const;

export function IconPickerField({ path, field }: IconPickerFieldProps) {
  const { setValue, value } = useField({ path });

  return (
    <div className="mb-4">
      <FieldLabel
        htmlFor={field.label}
        label={field.label}
        required={field.required}
      />
      <Select
        onValueChange={(value) => setValue(value)}
        defaultValue={value as string}
      >
        <SelectTrigger className="h-[40px] border border-muted-foreground   bg-neutral-800 ">
          <SelectValue placeholder="Icon" className="p-2" />
        </SelectTrigger>
        <SelectContent className="mt-1 bg-neutral-800 text-white">
          {ALLOWED_ICONS.map((iconName) => {
            const Icon = LucideIcons[iconName];
            return (
              <SelectItem value={iconName} key={iconName}>
                <Icon size={20} strokeWidth={1} />
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}
