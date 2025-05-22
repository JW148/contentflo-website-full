/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck

"use server";

import { Client } from "@notionhq/client";
import { Resend } from "resend";
import EmailTemplate from "@/components/ui/email-template";
import { getPayload } from "payload";
import configPromise from "@payload-config";
import { cache } from "react";

export async function register(state, formData) {
  const { name, email } = Object.fromEntries(formData.entries());
  try {
    const notion = new Client({ auth: process.env.NOTION_SECRET });
    const response = await notion.pages.create({
      parent: {
        database_id: `${process.env.NOTION_DB}`,
      },
      properties: {
        name: {
          type: "title",
          title: [
            {
              type: "text",
              text: {
                content: name,
              },
            },
          ],
        },
        email: {
          type: "email",
          email: email,
        },
      },
    });
    if (response) {
      const fName = name.split(" ")[0];
      const resend = new Resend(process.env.RESEND);
      resend.emails.send({
        from: "ContentFlo <hello@contentflo.io>",
        to: [email],
        subject: "Welcome to ContentFlo",
        react: EmailTemplate({ name: fName }),
      });
    }
    return {
      isError: false,
      response: "Success!",
    };
  } catch (error) {
    console.log(error);
    return {
      isError: true,
      response: "Try again",
    };
  }
}

export async function getBlogs() {
  try {
    const payload = await getPayload({ config: configPromise });
    const blogs = await payload.find({
      collection: "blog",
      pagination: false,
      sort: "-createdAt",
      overrideAccess: false,
    });
    return blogs.docs;
  } catch (error) {
    console.error("Error loading blogs", error);
  }
}

export const getBlogBySlug = cache(async (slug: string) => {
  try {
    const payload = await getPayload({ config: configPromise });
    const blog = await payload.find({
      collection: "blog",
      pagination: false,
      overrideAccess: false,
      limit: 1,
      where: {
        slug: {
          equals: slug,
        },
      },
    });
    return blog.docs[0];
  } catch (error) {
    console.error("Failed to fetch blog", error);
  }
});
