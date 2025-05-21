import { Blog } from "@/payload-types";
import { PayloadImage } from "../Image/PayloadImage";
import { formatDateTime } from "@/utilities/formatDateTime";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

interface BlogCardProps {
  blog: Blog;
}

export function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link href={`/blog/${blog.slug}`} className="flex col-span-3 md:col-span-1">
      <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-200 pt-0 overflow-hidden">
        <div className="relative w-full aspect-[3/2]">
          <PayloadImage image={blog.coverImage} />
        </div>
        <CardHeader>
          <h2 className="text-xl font-bold line-clamp-2">{blog.title}</h2>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground line-clamp-3">{blog.subtitle}</p>
        </CardContent>
        <CardFooter className="flex justify-between text-sm text-muted-foreground">
          <span>{blog.author}</span>
          <span>{formatDateTime(blog.createdAt)}</span>
        </CardFooter>
      </Card>
    </Link>
  );
}
