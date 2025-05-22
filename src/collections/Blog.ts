import { authenticated } from "@/access/authenticated";
import { editor } from "@/fields/Editor/Editor";
import { slugField } from "@/fields/slug";
import type { CollectionConfig } from "payload";

export const Blog: CollectionConfig = {
  slug: "blog",
  access: {
    create: authenticated,
    read: ({ req: { user } }) => {
      // Allow authenticated users
      if (user) {
        return true;
      }
      //if there is no authenticated user, return a query that checks if the isPublic field it true, otherwise it cannot be read
      return {
        isPublic: {
          equals: true,
        },
      };
    },
    update: authenticated,
    delete: authenticated,
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "subtitle",
      type: "textarea",
      required: true,
      admin: {
        description: "A short description about the content of the article",
      },
    },
    {
      name: "author",
      type: "select",
      options: ["Joe Wiggin", "Liam Coyle"],
      defaultValue: "Liam Coyle",
      hasMany: false,
      required: true,
    },
    {
      name: "coverImage",
      required: true,
      type: "upload",
      relationTo: "media",
    },
    {
      name: "body",
      type: "richText",
      required: true,
      editor: editor,
    },
    {
      name: "isPublic",
      label: "Make blog public",
      type: "checkbox",
      defaultValue: false,
      admin: {
        description:
          "Blog won't be visible on the website unless this is checked",
        position: "sidebar",
      },
    },
    ...slugField(),
  ],
};
