// import { headers as getHeaders } from "next/headers.js";
// import { getPayload } from "payload";
import React from "react";
// import { fileURLToPath } from "url";
import { Home } from "@/globals/home/Component";
// import config from "@/payload.config";

export default async function HomePage() {
  // Get the user from the Payload JWT auth token then verify the user by using payload.auth
  // const headers = await getHeaders();
  // const payloadConfig = await config;
  // const payload = await getPayload({ config: payloadConfig });
  // const { user } = await payload.auth({ headers });

  //Get a local file path to open this file in vscode
  // const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`;

  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-[#63e]/20 blur-[100px]" />
      </div>
      <Home />
    </div>
  );
}
