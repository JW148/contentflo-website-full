import type { CollectionConfig } from "payload";
import { authenticated } from "@/access/authenticated";

export const Users: CollectionConfig = {
  slug: "users",
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ["username", "email"],
    useAsTitle: "username",
    group: "Accounts",
  },
  auth: {
    loginWithUsername: {
      allowEmailLogin: true, // default: false
      requireEmail: true, // default: false
    },
  },
  fields: [
    {
      required: true,
      name: "username",
      type: "text",
    },
  ],
  timestamps: true,
};
