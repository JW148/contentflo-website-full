export interface RichTextType {
  root: {
    type: string;
    children: {
      type: string;
      version: number;
      [k: string]: unknown;
    }[];
    direction: ("ltr" | "rtl") | null;
    format: "left" | "start" | "center" | "right" | "end" | "justify" | "";
    indent: number;
    version: number;
  };
  [k: string]: unknown;
}

export interface FeatureType {
  icon: string;
  title: string;
  body: RichTextType;
  id?: string | null;
}

export interface ProcessStepType {
  icon: string;
  title: string;
  body: RichTextType;
}

import type { Media } from "@/payload-types";

export interface TestimonialsType {
  companyLogo: string | Media;
  name: string;
  company: string;
  role: string;
  quote: RichTextType;
}

export interface faqType {
  question: string;
  answer: RichTextType;
}
