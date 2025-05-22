import { getBlogBySlug } from "@/actions/actions";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import type { Metadata } from "next";
import { Article } from "@/components/Blog/article";

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

  const ogImage =
    typeof blog.coverImage !== "string" && blog.coverImage.sizes?.openGraph?.url
      ? blog.coverImage.sizes?.openGraph?.url
      : "/dddepth-276.jpg";

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL as string),
    title: blog.title,
    description: blog.subtitle,
    openGraph: {
      title: blog.title,
      description: blog.subtitle,
      type: "article",
      locale: "en_UK",
      siteName: "ContentFlo",
      images: ogImage,
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

      <Article blog={blog} />
    </div>
  );
}
