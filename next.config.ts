import { withNextVideo } from "next-video/process";
import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
};

export default withPayload(withNextVideo(nextConfig));
