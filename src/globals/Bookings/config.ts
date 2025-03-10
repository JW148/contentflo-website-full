import { GlobalConfig } from "payload";
import { authenticated } from "../../access/authenticated";
import { authenticatedOrPublished } from "../../access/authenticatedOrPublished";

export const Bookings: GlobalConfig = {
  slug: "bookings",
  access: {
    read: authenticatedOrPublished,
    update: authenticated,
  },
  fields: [
    {
      type: "text",
      label: "Cal.com Event Link",
      name: "eventLink",
      //@ts-expect-error: 'PayloadCMS docs are unclear on field validation types'
      validate: (value) => {
        const calRegex =
          /^(?:https:\/\/cal\.com\/([a-z0-9-]+)\/([a-z0-9]+min))?$/;

        return calRegex.test(value ?? "") || "Invalid Cal.com event link";
      },
    },
  ],
};
