import { getBlogs } from "@/actions/actions";
import { BlogCard } from "@/components/Blog/blog-card";
export const dynamic = "force-dynamic";

export default async function Blog() {
  const blogs = await getBlogs();
  return (
    <div className="flex min-h-screen ">
      <div className="container py-20 flex flex-col space-y-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            ContentFlo Blog
          </h1>
          <p className="text-xl text-muted-foreground">
            Insights, tips, and strategies to help you create better content and
            grow your online presence.
          </p>
        </div>
        {blogs && blogs.length > 0 ? (
          <div className="grid grid-cols-3 gap-4">
            {blogs &&
              blogs.map((blog) => <BlogCard blog={blog} key={blog.id} />)}
          </div>
        ) : (
          <div className="flex w-full h-[50vh] items-center justify-center">
            <p className="text-xl text-muted-foreground">
              Nothing here yet - check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
