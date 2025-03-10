import { Banner } from "@payloadcms/ui/elements/Banner";
import React from "react";
import { getMeUser } from "@/utilities/getMeUser";
import { UmamiAnalytics } from "./Analytics/UmamiAnalytics";
import { getGlobal } from "@/utilities/getGlobals";

import "./index.scss";
import { Analytics } from "@/payload-types";

const baseClass = "before-dashboard";

const BeforeDashboard: React.FC = async () => {
  const user = await getMeUser();
  const analyticsShareURL = (await getGlobal("analytics", 1)) as Analytics;
  let shareLink;
  if (analyticsShareURL.shareLink) shareLink = analyticsShareURL.shareLink;
  return (
    <div className={baseClass}>
      <Banner className={`${baseClass}__banner`} type="success">
        <h4>
          Welcome to your dashboard <b>{user.user?.username}</b>!
        </h4>
      </Banner>
      {shareLink && <UmamiAnalytics />}
    </div>
  );
};

export default BeforeDashboard;
