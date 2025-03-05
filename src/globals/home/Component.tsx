"use server";

import { RefreshRouteOnSave } from "@/utilities/refreshRouteOnSave";
import { getPayload } from "payload";
import config from "@payload-config";

export async function Home() {
  const payload = await getPayload({ config });
  const homeData = await payload.findGlobal({
    slug: "home",
    depth: 1,
  });
  return (
    <div className="z-10 relative h-screen justify-center ">
      <RefreshRouteOnSave />

      <h1 className="text-9xl">{homeData.title}</h1>
    </div>
  );
}
