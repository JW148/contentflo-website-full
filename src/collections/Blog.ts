import { authenticated } from "@/access/authenticated";
import { authenticatedOrPublished } from "@/access/authenticatedOrPublished";
import { editor } from "@/fields/Editor/Editor";
import { slugField } from "@/fields/slug";
import type { CollectionConfig } from "payload";

export const Blog: CollectionConfig = {
  slug: "blog",
  access: {
    create: authenticated,
    read: authenticatedOrPublished,
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
    ...slugField(),
  ],
};
