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
    formatOptions: {
      format: "webp",
      options: {
        quality: 75,
      },
    },
    imageSizes: [
      {
        name: "thumbnail",
        width: 300,
        formatOptions: {
          format: "webp",
          options: {
            quality: 75,
          },
        },
      },
      //used for open graph image
      {
        name: "openGraph",
        formatOptions: {
          format: "jpg",
          options: {
            quality: 75,
          },
        },
      },
      //used for large images that
      {
        name: "large",
        width: 1000,
        formatOptions: {
          format: "webp",
          options: {
            quality: 75,
          },
        },
      },
    ],
  },
};
