import { ImageResponse } from "next/og";
import { getBlogBySlug } from "@/actions/actions";

// Image metadata
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = await getBlogBySlug(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fff",
          position: "relative",
          backgroundImage: `url(${process.env.NEXT_PUBLIC_SERVER_URL}/dddepth-276.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <div
          style={{
            position: "relative",
            background: "rgba(0,0,0,0.5)",
            color: "#fff",
            padding: "40px",
            borderRadius: "16px",
            maxWidth: "80%",
            textAlign: "center",
            display: "flex",
          }}
        >
          <h1 style={{ fontSize: 64, margin: 0 }}>
            {blog ? blog.title : "ContentFlo"}
          </h1>
        </div>
      </div>
    ),
    {
      width: size.width,
      height: size.height,
    }
  );
}
