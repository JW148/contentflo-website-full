"use client";

import { Blog } from "@/payload-types";
import { formatDateTime } from "@/utilities/formatDateTime";
import { useEffect, useRef, useState } from "react";
import { PayloadImage } from "../Image/PayloadImage";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { jsxConverters } from "@/utilities/LexicalConverters/jsxConverters";

interface ArticleProps {
  blog: Blog;
}

export function Article({ blog }: ArticleProps) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [readTime, setReadTime] = useState<number>(5);

  useEffect(() => {
    if (bodyRef.current) {
      const bodyText = bodyRef.current.innerText;

      const words = bodyText.trim().split(/\s+/).length;
      const time = Math.ceil(words / 255);

      setReadTime(time);
    }
  }, [bodyRef]);

  return (
    <article className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
        {blog.title}
      </h1>

      <div className="flex items-center text-muted-foreground mb-8">
        <span>{blog.author}</span>
        <span className="mx-2">•</span>
        <span>{formatDateTime(blog.createdAt)}</span>
        <span className="mx-2">•</span>
        <span>{readTime} minute read</span>
      </div>

      <div className="relative w-full h-[400px] mb-8">
        <PayloadImage image={blog.coverImage} />
      </div>

      <div ref={bodyRef}>
        <RichText data={blog.body} converters={jsxConverters} />
      </div>
    </article>
  );
}
