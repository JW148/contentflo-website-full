import type { CollectionConfig } from "payload";
import { authenticated } from "../access/authenticated";
import { authenticatedOrPublished } from "../access/authenticatedOrPublished";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    create: authenticated,
    delete: authenticated,
    update: authenticated,
    read: authenticatedOrPublished,
  },
  admin: {
    group: "Miscellaneous",
  },
  fields: [
    {
      name: "alt",
      type: "text",
      admin: {
        description:
          "Describe the image's content. It's not required but can be important for accessibility, SEO, and user experience.",
      },
    },
  ],
  upload: {
    disableLocalStorage: true,
    adminThumbnail: "thumbnail",
    focalPoint: true,
    displayPreview: true,
    imageSizes: [
      {
        name: "thumbnail",
        width: 300,
      },
      {
        name: "square",
        width: 500,
        height: 500,
      },
      {
        name: "small",
        width: 600,
      },
      {
        name: "medium",
        width: 900,
      },
      {
        name: "large",
        width: 1400,
      },
      {
        name: "xlarge",
        width: 1920,
      },
      {
        name: "og",
        width: 1200,
        height: 630,
        crop: "center",
      },
    ],
  },
};
