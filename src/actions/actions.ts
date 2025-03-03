/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck

"use server";

import { Client } from "@notionhq/client";
import { Resend } from "resend";
import EmailTemplate from "@/components/ui/email-template";

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
