import { GlobalConfig } from "payload";
import { authenticated } from "../../access/authenticated";
import { authenticatedOrPublished } from "../../access/authenticatedOrPublished";

export const Analytics: GlobalConfig = {
  slug: "analytics",
  access: {
    read: authenticatedOrPublished,
    update: authenticated,
  },
  fields: [
    {
      type: "text",
      label: "Umami Analytics Dashboard Share Link",
      name: "shareLink",
      //@ts-expect-error: 'PayloadCMS docs are unclear on field validation types'
      validate: (value) => {
        const shareURLRegex =
          /^$|^https:\/\/umami-gkgo0gscg8kc88oowcgg8css\.coolify\.contentflo\.io\/share\/[A-Za-z0-9]+\/[\w.-]+\.\w+$/;

        return (
          shareURLRegex.test(value ?? "") ||
          "Invalid Umami Dashboard share link"
        );
      },
    },
  ],
};
