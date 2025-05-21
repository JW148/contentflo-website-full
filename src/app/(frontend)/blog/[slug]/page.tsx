import { getBlogBySlug } from "@/actions/actions";
import { PayloadImage } from "@/components/Image/PayloadImage";
import { formatDateTime } from "@/utilities/formatDateTime";
import { jsxConverters } from "@/utilities/LexicalConverters/jsxConverters";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

//Generate dynamic metadata based on the blog post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  // fetch post information
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return {
    title: blog.title,
    description: blog.subtitle,
    openGraph: {
      title: blog.title,
      description: blog.subtitle,
      type: "article",
      locale: "en_UK",
      siteName: "ContentFlo",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        href="/blog"
        className="flex items-center text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to all posts
      </Link>

      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          {blog.title}
        </h1>

        <div className="flex items-center text-muted-foreground mb-8">
          <span>{blog.author}</span>
          <span className="mx-2">•</span>
          <span>{formatDateTime(blog.createdAt)}</span>
        </div>

        <div className="relative w-full h-[400px] mb-8">
          <PayloadImage image={blog.coverImage} />
        </div>

        <RichText data={blog.body} converters={jsxConverters} />
      </article>
    </div>
  );
}
