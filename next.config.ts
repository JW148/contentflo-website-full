import { withNextVideo } from "next-video/process";
import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default withPayload(withNextVideo(nextConfig));
