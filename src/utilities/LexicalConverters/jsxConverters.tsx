import { type JSXConvertersFunction } from "@payloadcms/richtext-lexical/react";
import type { DefaultNodeTypes } from "@payloadcms/richtext-lexical";
import { PayloadImage } from "@/components/Image/PayloadImage";
import { Media } from "@/payload-types";

export const jsxConverters: JSXConvertersFunction<DefaultNodeTypes> = ({
  defaultConverters,
}) => ({
  ...defaultConverters,
  heading: ({ node }) => {
    switch (node.tag) {
      case "h1":
        return (
          <h1 className="text-4xl font-extrabold ">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {node.children.map((child: any) => child.text).join(" ")}
          </h1>
        );
      case "h2":
        return (
          <h1 className="text-3xl font-extrabold ">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {node.children.map((child: any) => child.text).join(" ")}
          </h1>
        );
      case "h3":
        return (
          <h1 className="text-2xl font-extrabold ">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {node.children.map((child: any) => child.text).join(" ")}
          </h1>
        );
      case "h4":
        return (
          <h1 className="text-xl font-extrabold ">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {node.children.map((child: any) => child.text).join(" ")}
          </h1>
        );
      case "h5":
        return (
          <h1 className="text-lg font-extrabold ">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {node.children.map((child: any) => child.text).join(" ")}
          </h1>
        );
      case "h6":
        return (
          <h1 className="text-base font-extrabold ">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {node.children.map((child: any) => child.text).join(" ")}
          </h1>
        );
      default:
        return (
          <h1 className=" font-extrabold ">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {node.children.map((child: any) => child.text).join(" ")}
          </h1>
        );
    }
  },
  quote: ({ node }) => (
    <blockquote className="border-l-4 border-neutral-600 pl-6 italic">
      <p className="text-xl text-neutral-600 mb-4">
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {node.children.map((child: any) => child.text).join(" ")}
      </p>
    </blockquote>
  ),
  upload: ({ node }) => (
    <div className="flex  w-full  justify-center items-center">
      <div className="flex relative w-full h-[50vh]  md:w-[50vw] md:h-[75vh]">
        <PayloadImage image={node.value as Media} />
      </div>
    </div>
  ),
  list: ({ node }) => {
    if (node.listType === "bullet") {
      return (
        <ul className="list-disc list-inside">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {node.children.map((child: any, i: number) => {
            return (
              <li key={i}>
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {child.children.map((child: any) => child.text).join(" ")}
              </li>
            );
          })}
        </ul>
      );
    }
    if (node.listType === "number") {
      return (
        <ul className="list-decimal list-inside">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {node.children.map((child: any, i: number) => {
            return (
              <li key={i}>
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {child.children.map((child: any) => child.text).join(" ")}
              </li>
            );
          })}
        </ul>
      );
    }
  },
  link: ({ node }) => {
    if (node.fields.linkType === "internal") {
      return (
        <a
          href={
            typeof node.fields.doc?.value === "object" &&
            "url" in (node.fields.doc.value as { url?: string })
              ? (node.fields.doc.value as { url?: string }).url
              : undefined
          }
          target="_blank"
          className="hover:underline"
        >
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {node.children.map((child: any) => child.text).join(" ")}
        </a>
      );
    }
    if (node.fields.linkType === "custom") {
      return (
        <a
          href={node.fields.url}
          target={node.fields.newTab ? "_blank" : ""}
          className="hover:underline"
        >
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {node.children.map((child: any) => child.text).join(" ")}
        </a>
      );
    }

    return <p>Link Node</p>;
  },
});
