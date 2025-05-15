import { GlobalConfig } from "payload";
import { revalidateHome } from "./hooks/revalidateHome";
import { authenticated } from "../../access/authenticated";
import { authenticatedOrPublished } from "../../access/authenticatedOrPublished";
import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
  BoldFeature,
  UnderlineFeature,
  ItalicFeature,
} from "@payloadcms/richtext-lexical";

export const Home: GlobalConfig = {
  slug: "home",
  access: {
    readVersions: () => true,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    group: "Pages",
  },
  fields: [
    {
      label: "Hero Section",
      type: "collapsible",
      fields: [
        {
          name: "heroHeading",
          label: "Hero Heading",
          type: "text",
          required: true,
          defaultValue: "Take Full Control Of",
        },
        {
          name: "flipWords",
          label: "Flip Words",
          admin: {
            description: "Words that are cycled through in hero text.",
          },
          type: "array",
          defaultValue: [
            { word: "Your Content" },
            { word: "Your Brand" },
            { word: "Your Data" },
          ],
          fields: [
            {
              name: "word",
              type: "text",
              required: true,
            },
          ],
        },
        {
          name: "heroSubheading",
          label: "Subheading",
          type: "richText",
          required: true,
          defaultValue: {
            root: {
              children: [
                {
                  children: [
                    {
                      detail: 0,
                      format: 0,
                      mode: "normal",
                      style: "",
                      text: "Create, manage, and deliver your own courses and content directly from your website—no third-party needed.",
                      type: "text",
                      version: 1,
                    },
                  ],
                  direction: "ltr",
                  format: "",
                  indent: 0,
                  type: "paragraph",
                  version: 1,
                  textFormat: 0,
                  textStyle: "",
                },
              ],
              direction: "ltr",
              format: "",
              indent: 0,
              type: "root",
              version: 1,
            },
          },
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [
                ...rootFeatures,
                FixedToolbarFeature(),
                InlineToolbarFeature(),
                BoldFeature(),
                ItalicFeature(),
                UnderlineFeature(),
              ];
            },
          }),
        },
        {
          name: "heroVideo",
          label: "Hero Video",
          required: true,
          type: "relationship",
          relationTo: "mux-video",
        },
      ],
    },
    {
      label: "Preview",
      type: "collapsible",
      fields: [
        {
          name: "previewHeading",
          label: "Heading",
          type: "text",
          required: true,
          defaultValue: "Bespoke Content Management",
        },
        {
          name: "previewSubheading",
          label: "Subheading",
          type: "richText",
          required: true,
          defaultValue: {
            root: {
              children: [
                {
                  children: [
                    {
                      detail: 0,
                      format: 0,
                      mode: "normal",
                      style: "",
                      text: "Discover how ",
                      type: "text",
                      version: 1,
                    },

                    {
                      detail: 0,
                      format: 1,
                      mode: "normal",
                      style: "",
                      text: "ContentFlo",
                      type: "text",
                      version: 1,
                    },

                    {
                      detail: 0,
                      format: 0,
                      mode: "normal",
                      style: "",
                      text: " can transform your content with our innovative technologies.",
                      type: "text",
                      version: 1,
                    },
                  ],
                  direction: "ltr",
                  format: "left",
                  indent: 0,
                  type: "paragraph",
                  version: 1,
                  textFormat: 0,
                  textStyle: "",
                },
              ],
              direction: "ltr",
              format: "",
              indent: 0,
              type: "root",
              version: 1,
            },
          },
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [
                ...rootFeatures,
                FixedToolbarFeature(),
                InlineToolbarFeature(),
                BoldFeature(),
                ItalicFeature(),
                UnderlineFeature(),
              ];
            },
          }),
        },
        {
          name: "previewImage",
          type: "upload",
          relationTo: "media",
          required: true,
          filterOptions: {
            mimeType: { contains: "image" },
          },
        },
      ],
    },
    {
      label: "Features",
      type: "collapsible",
      fields: [
        {
          name: "featuresHeading",
          type: "text",
          required: true,
          defaultValue: "Why Choose ContentFlo?",
        },
        {
          name: "featuresSubheading",
          label: "Subheading",
          type: "richText",
          defaultValue: {
            root: {
              children: [
                {
                  children: [
                    {
                      detail: 0,
                      format: 0,
                      mode: "normal",
                      style: "",
                      text: "Discover how ",
                      type: "text",
                      version: 1,
                    },

                    {
                      detail: 0,
                      format: 1,
                      mode: "normal",
                      style: "",
                      text: "ContentFlo ",
                      type: "text",
                      version: 1,
                    },

                    {
                      detail: 0,
                      format: 0,
                      mode: "normal",
                      style: "",
                      text: "can transform ",
                      type: "text",
                      version: 1,
                    },

                    {
                      detail: 0,
                      format: 1,
                      mode: "normal",
                      style: "",
                      text: "your ",
                      type: "text",
                      version: 1,
                    },

                    {
                      detail: 0,
                      format: 0,
                      mode: "normal",
                      style: "",
                      text: "content with our innovative features",
                      type: "text",
                      version: 1,
                    },
                  ],
                  direction: "ltr",
                  format: "left",
                  indent: 0,
                  type: "paragraph",
                  version: 1,
                  textFormat: 0,
                  textStyle: "",
                },
              ],
              direction: "ltr",
              format: "",
              indent: 0,
              type: "root",
              version: 1,
            },
          },
          required: true,
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [
                ...rootFeatures,
                FixedToolbarFeature(),
                InlineToolbarFeature(),
                BoldFeature(),
                ItalicFeature(),
                UnderlineFeature(),
              ];
            },
          }),
        },
        {
          name: "feature",
          type: "array",
          maxRows: 4,
          minRows: 4,
          defaultValue: [
            {
              icon: "ShieldCheck",
              title: "Full Brand Control",
              body: {
                root: {
                  children: [
                    {
                      children: [
                        {
                          detail: 0,
                          format: 0,
                          mode: "normal",
                          style: "",
                          text: "ContentFlo is a software house that specialises in ",
                          type: "text",
                          version: 1,
                        },
                        {
                          detail: 0,
                          format: 1,
                          mode: "normal",
                          style: "",
                          text: "bespoke",
                          type: "text",
                          version: 1,
                        },
                        {
                          detail: 0,
                          format: 0,
                          mode: "normal",
                          style: "",
                          text: " content management web platforms with a focus on giving you ",
                          type: "text",
                          version: 1,
                        },
                        {
                          detail: 0,
                          format: 1,
                          mode: "normal",
                          style: "",
                          text: "more control",
                          type: "text",
                          version: 1,
                        },
                        {
                          detail: 0,
                          format: 0,
                          mode: "normal",
                          style: "",
                          text: " over your ",
                          type: "text",
                          version: 1,
                        },
                        {
                          detail: 0,
                          format: 1,
                          mode: "normal",
                          style: "",
                          text: "brand identity",
                          type: "text",
                          version: 1,
                        },
                        {
                          detail: 0,
                          format: 0,
                          mode: "normal",
                          style: "",
                          text: " and ",
                          type: "text",
                          version: 1,
                        },
                        {
                          detail: 0,
                          format: 1,
                          mode: "normal",
                          style: "",
                          text: "content",
                          type: "text",
                          version: 1,
                        },
                        {
                          detail: 0,
                          format: 0,
                          mode: "normal",
                          style: "",
                          text: ".",
                          type: "text",
                          version: 1,
                        },
                      ],
                      direction: "ltr",
                      format: "",
                      indent: 0,
                      type: "paragraph",
                      version: 1,
                      textFormat: 0,
                      textStyle: "",
                    },
                  ],
                  direction: "ltr",
                  format: "",
                  indent: 0,
                  type: "root",
                  version: 1,
                },
              },
            },
            {
              icon: "Puzzle",
              title: "Website Integration",
              body: {
                root: {
                  children: [
                    {
                      children: [
                        {
                          detail: 0,
                          format: 0,
                          mode: "normal",
                          style: "",
                          text: "Our software allows you to host courses directly on ",
                          type: "text",
                          version: 1,
                        },
                        {
                          detail: 0,
                          format: 1,
                          mode: "normal",
                          style: "",
                          text: "your own website",
                          type: "text",
                          version: 1,
                        },
                        {
                          detail: 0,
                          format: 0,
                          mode: "normal",
                          style: "",
                          text: ", giving you more brand control and ",
                          type: "text",
                          version: 1,
                        },
                        {
                          detail: 0,
                          format: 1,
                          mode: "normal",
                          style: "",
                          text: "data ownership",
                          type: "text",
                          version: 1,
                        },
                        {
                          detail: 0,
                          format: 0,
                          mode: "normal",
                          style: "",
                          text: ".",
                          type: "text",
                          version: 1,
                        },
                      ],
                      direction: "ltr",
                      format: "",
                      indent: 0,
                      type: "paragraph",
                      version: 1,
                      textFormat: 0,
                      textStyle: "",
                    },
                  ],
                  direction: "ltr",
                  format: "",
                  indent: 0,
                  type: "root",
                  version: 1,
                },
              },
            },
            {
              icon: "Lock",
              title: "Data Ownership",
              body: {
                root: {
                  children: [
                    {
                      children: [
                        {
                          detail: 0,
                          format: 0,
                          mode: "normal",
                          style: "",
                          text: "You own your data, unlike other ",
                          type: "text",
                          version: 1,
                        },
                        {
                          detail: 0,
                          format: 1,
                          mode: "normal",
                          style: "",
                          text: "third-party platforms",
                          type: "text",
                          version: 1,
                        },
                        {
                          detail: 0,
                          format: 0,
                          mode: "normal",
                          style: "",
                          text: ".",
                          type: "text",
                          version: 1,
                        },
                      ],
                      direction: "ltr",
                      format: "start",
                      indent: 0,
                      type: "paragraph",
                      version: 1,
                      textFormat: 0,
                      textStyle: "",
                    },
                    {
                      children: [
                        {
                          detail: 0,
                          format: 0,
                          mode: "normal",
                          style: "",
                          text: "The platform we built for you is, managed by you and hosted on your domain.",
                          type: "text",
                          version: 1,
                        },
                      ],
                      direction: "ltr",
                      format: "start",
                      indent: 0,
                      type: "paragraph",
                      version: 1,
                      textFormat: 0,
                      textStyle: "",
                    },
                  ],
                  direction: "ltr",
                  format: "",
                  indent: 0,
                  type: "root",
                  version: 1,
                },
              },
            },
            {
              icon: "Palette",
              title: "Enhanced Custom Branding Flexibility",
              body: {
                root: {
                  children: [
                    {
                      children: [
                        {
                          detail: 0,
                          format: 0,
                          mode: "normal",
                          style: "",
                          text: "Tailor the look and feel of your courses to",
                          type: "text",
                          version: 1,
                        },
                        {
                          detail: 0,
                          format: 1,
                          mode: "normal",
                          style: "",
                          text: " match your brand perfectly",
                          type: "text",
                          version: 1,
                        },
                        {
                          detail: 0,
                          format: 0,
                          mode: "normal",
                          style: "",
                          text: ".",
                          type: "text",
                          version: 1,
                        },
                      ],
                      direction: "ltr",
                      format: "",
                      indent: 0,
                      type: "paragraph",
                      version: 1,
                      textFormat: 0,
                      textStyle: "",
                    },
                  ],
                  direction: "ltr",
                  format: "",
                  indent: 0,
                  type: "root",
                  version: 1,
                },
              },
            },
          ],
          required: true,
          fields: [
            {
              name: "icon",
              type: "text",
              required: true,
              defaultValue: "BadgeCheck",
              admin: {
                components: {
                  Field: "@/fields/IconPickerField#IconPickerField",
                },
              },
            },
            {
              name: "title",
              type: "text",
              required: true,
            },
            {
              name: "body",
              type: "richText",
              required: true,
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    BoldFeature(),
                    ItalicFeature(),
                    UnderlineFeature(),
                  ];
                },
              }),
              admin: {
                description: "Write a short description of the feature",
              },
            },
          ],
        },
      ],
    },
    {
      label: "Process",
      type: "collapsible",
      fields: [
        {
          name: "processHeading",
          type: "text",
          required: true,
          defaultValue: "Your Journey To Full Brand Control",
        },
        {
          name: "processSubheading",
          type: "richText",
          required: true,
          defaultValue: {
            root: {
              children: [
                {
                  children: [
                    {
                      detail: 0,
                      format: 0,
                      mode: "normal",
                      style: "",
                      text: "Our streamlined onboarding process gets you from signup to full control of your content in just four simple steps.",
                      type: "text",
                      version: 1,
                    },
                  ],
                  direction: "ltr",
                  format: "left",
                  indent: 0,
                  type: "paragraph",
                  version: 1,
                  textFormat: 0,
                  textStyle: "",
                },
              ],
              direction: "ltr",
              format: "",
              indent: 0,
              type: "root",
              version: 1,
            },
          },
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [
                ...rootFeatures,
                FixedToolbarFeature(),
                InlineToolbarFeature(),
                BoldFeature(),
                ItalicFeature(),
                UnderlineFeature(),
              ];
            },
          }),
        },
        {
          name: "step",
          type: "array",
          maxRows: 4,
          minRows: 4,
          required: true,
          defaultValue: [
            {
              icon: "Calendar",
              title: "Book a Free Consultation",
              body: {
                root: {
                  children: [
                    {
                      children: [
                        {
                          detail: 0,
                          format: 0,
                          mode: "normal",
                          style: "",
                          text: "Get started by scheduling a personalised consultation with our CTO and Co-Founder, where we'll assess your needs and show how ContentFlo can help you take control of your content.",
                          type: "text",
                          version: 1,
                        },
                      ],
                      direction: "ltr",
                      format: "start",
                      indent: 0,
                      type: "paragraph",
                      version: 1,
                      textFormat: 0,
                      textStyle: "",
                    },
                  ],
                  direction: "ltr",
                  format: "",
                  indent: 0,
                  type: "root",
                  version: 1,
                },
              },
            },
            {
              icon: "Handshake",
              title: "Onboarding and Support",
              body: {
                root: {
                  children: [
                    {
                      children: [
                        {
                          detail: 0,
                          format: 0,
                          mode: "normal",
                          style: "",
                          text: "In your first month, we'll guide you step-by-step with onboarding, offering weekly support calls to ensure everything is set up perfectly and customised to your brand.",
                          type: "text",
                          version: 1,
                        },
                      ],
                      direction: "ltr",
                      format: "start",
                      indent: 0,
                      type: "paragraph",
                      version: 1,
                      textFormat: 0,
                      textStyle: "",
                    },
                  ],
                  direction: "ltr",
                  format: "",
                  indent: 0,
                  type: "root",
                  version: 1,
                },
              },
            },
            {
              icon: "Rocket",
              title: "Launch Your Custom Platform",
              body: {
                root: {
                  children: [
                    {
                      children: [
                        {
                          detail: 0,
                          format: 0,
                          mode: "normal",
                          style: "",
                          text: "After you send us your content, we'll have your website fully integrated with your content, tailored to your exact specifications, from front end website to backend content management system (the software package) - ready to engage your audience!",
                          type: "text",
                          version: 1,
                        },
                      ],
                      direction: "ltr",
                      format: "start",
                      indent: 0,
                      type: "paragraph",
                      version: 1,
                      textFormat: 0,
                      textStyle: "",
                    },
                  ],
                  direction: "ltr",
                  format: "",
                  indent: 0,
                  type: "root",
                  version: 1,
                },
              },
            },
            {
              icon: "Sparkles",
              title: "Take Control with Your Dashboard",
              body: {
                root: {
                  children: [
                    {
                      children: [
                        {
                          detail: 0,
                          format: 0,
                          mode: "normal",
                          style: "",
                          text: "Easily manage your content, courses, and customer data from a simple, intuitive dashboard designed for flexibility and full control.",
                          type: "text",
                          version: 1,
                        },
                      ],
                      direction: "ltr",
                      format: "start",
                      indent: 0,
                      type: "paragraph",
                      version: 1,
                      textFormat: 0,
                      textStyle: "",
                    },
                  ],
                  direction: "ltr",
                  format: "",
                  indent: 0,
                  type: "root",
                  version: 1,
                },
              },
            },
          ],
          label: "Process Step",
          fields: [
            {
              name: "icon",
              type: "text",
              required: true,
              defaultValue: "BadgeCheck",
              admin: {
                components: {
                  Field: "@/fields/IconPickerField#IconPickerField",
                },
              },
            },
            {
              name: "title",
              type: "text",
              required: true,
            },
            {
              name: "body",
              type: "richText",
              required: true,
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    BoldFeature(),
                    ItalicFeature(),
                    UnderlineFeature(),
                  ];
                },
              }),
              admin: {
                description: "Write a short description of the process step",
              },
            },
          ],
        },
      ],
    },
    {
      label: "Testimonials",
      type: "collapsible",
      fields: [
        {
          name: "testimonialsTitle",
          type: "text",
          defaultValue: "Trusted by Influencers and Businesses",
          required: true,
        },
        {
          name: "testomonialsSubheading",
          type: "richText",
          required: true,
          defaultValue: {
            root: {
              children: [
                {
                  children: [
                    {
                      detail: 0,
                      format: 0,
                      mode: "normal",
                      style: "",
                      text: "Don't just take our word for it. Hear from the people who use ",
                      type: "text",
                      version: 1,
                    },

                    {
                      detail: 0,
                      format: 1,
                      mode: "normal",
                      style: "",
                      text: "ContentFlo",
                      type: "text",
                      version: 1,
                    },

                    {
                      detail: 0,
                      format: 0,
                      mode: "normal",
                      style: "",
                      text: " every day.",
                      type: "text",
                      version: 1,
                    },
                  ],
                  direction: "ltr",
                  format: "",
                  indent: 0,
                  type: "paragraph",
                  version: 1,
                  textFormat: 0,
                  textStyle: "",
                },
              ],
              direction: "ltr",
              format: "",
              indent: 0,
              type: "root",
              version: 1,
            },
          },
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [
                ...rootFeatures,
                FixedToolbarFeature(),
                InlineToolbarFeature(),
                BoldFeature(),
                ItalicFeature(),
                UnderlineFeature(),
              ];
            },
          }),
        },
        {
          label: "Video Testimonial",
          type: "collapsible",
          fields: [
            {
              name: "videoTestimonial",
              label: "Video",
              required: true,
              type: "relationship",
              relationTo: "mux-video",
            },
            {
              name: "companyLogo",
              type: "upload",
              relationTo: "media",
              required: true,
              filterOptions: {
                mimeType: { contains: "image" },
              },
            },
            {
              name: "name",
              type: "text",
              required: true,
              defaultValue: "AbdAllah Mitchell",
            },
            {
              name: "company",
              type: "text",
              required: true,
              defaultValue: "AB ZONE",
            },
            {
              name: "role",
              type: "text",
              required: true,
              defaultValue: "Founder",
            },
            {
              name: "quote",
              type: "richText",
              required: true,
              defaultValue: {
                root: {
                  children: [
                    {
                      children: [
                        {
                          detail: 0,
                          format: 0,
                          mode: "normal",
                          style: "",
                          text: "Everything fits perfectly into my website. It looks professional, feels native, and enhances my credibility. ",
                          type: "text",
                          version: 1,
                        },
                      ],
                      direction: "ltr",
                      format: "",
                      indent: 0,
                      type: "paragraph",
                      version: 1,
                      textFormat: 0,
                      textStyle: "",
                    },
                  ],
                  direction: "ltr",
                  format: "",
                  indent: 0,
                  type: "root",
                  version: 1,
                },
              },
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    BoldFeature(),
                    ItalicFeature(),
                    UnderlineFeature(),
                  ];
                },
              }),
            },
          ],
        },
        {
          name: "testimonials",
          admin: {
            description:
              "Text-based testimonials to be displayed next to the video testimonial.",
          },
          type: "array",
          defaultValue: [
            {
              name: "Julie Powell",
              company: "EYW",
              role: "Head of Training, Learning and Development",
              quote: {
                root: {
                  children: [
                    {
                      children: [
                        {
                          detail: 0,
                          format: 0,
                          mode: "normal",
                          style: "",
                          text: "They made the entire process of building the app easy to understand and guided us in developing effective strategies to reach a new audience. Their expertise and proactive support gave us confidence at every step, and we're thrilled to have a tool that will enhance our training.",
                          type: "text",
                          version: 1,
                        },
                      ],
                      direction: "ltr",
                      format: "start",
                      indent: 0,
                      type: "paragraph",
                      version: 1,
                      textFormat: 0,
                      textStyle: "",
                    },
                  ],
                  direction: "ltr",
                  format: "",
                  indent: 0,
                  type: "root",
                  version: 1,
                },
              },
              id: "67c863af2cb4c22893fa8aac",
            },
            {
              name: "Grant Forrest",
              company: "Lunaria LTD",
              role: "Technical Director",
              quote: {
                root: {
                  children: [
                    {
                      children: [
                        {
                          detail: 0,
                          format: 0,
                          mode: "normal",
                          style: "",
                          text: "The team impressed us with their skill and attention to detail on a complex web rebuild. The project's rapid progress and the developer's deep knowledge of modern frameworks made for a smooth, effective deployment. ContentFlo have an exceptionally talented developer with a proactive, positive approach.",
                          type: "text",
                          version: 1,
                        },
                      ],
                      direction: "ltr",
                      format: "start",
                      indent: 0,
                      type: "paragraph",
                      version: 1,
                      textFormat: 0,
                      textStyle: "",
                    },
                  ],
                  direction: "ltr",
                  format: "",
                  indent: 0,
                  type: "root",
                  version: 1,
                },
              },
              id: "67c863ec2cb4c22893fa8aae",
            },
          ],
          maxRows: 2,
          minRows: 2,
          required: true,
          fields: [
            {
              name: "companyLogo",
              type: "upload",
              relationTo: "media",
              required: true,
              filterOptions: {
                mimeType: { contains: "image" },
              },
            },
            {
              name: "name",
              type: "text",
              required: true,
              defaultValue: "AbdAllah Mitchell",
            },
            {
              name: "company",
              type: "text",
              required: true,
              defaultValue: "AB ZONE",
            },
            {
              name: "role",
              type: "text",
              required: true,
              defaultValue: "Founder",
            },
            {
              name: "quote",
              type: "richText",
              required: true,
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    BoldFeature(),
                    ItalicFeature(),
                    UnderlineFeature(),
                  ];
                },
              }),
            },
          ],
        },
      ],
    },
    {
      label: "FAQ",
      type: "collapsible",
      fields: [
        {
          name: "faq",
          type: "array",
          defaultValue: [
            {
              question:
                "What makes ContentFlo different from other platforms like Kajabi or Teachable?",
              answer: {
                root: {
                  children: [
                    {
                      children: [
                        {
                          detail: 0,
                          format: 0,
                          mode: "normal",
                          style: "",
                          text: "ContentFlo allows you to fully integrate courses directly on your own website, giving you full control over branding, design, and data ownership. Unlike other platforms, you won'&apos;'t have to rely on third-party hosts or sacrifice your brand's identity.",
                          type: "text",
                          version: 1,
                        },
                      ],
                      direction: "ltr",
                      format: "start",
                      indent: 0,
                      type: "paragraph",
                      version: 1,
                      textFormat: 0,
                      textStyle: "",
                    },
                  ],
                  direction: "ltr",
                  format: "",
                  indent: 0,
                  type: "root",
                  version: 1,
                },
              },
              id: "67c8676697a9423163bc84ad",
            },
            {
              question: "What is included in the setup process?",
              answer: {
                root: {
                  children: [
                    {
                      children: [
                        {
                          detail: 0,
                          format: 0,
                          mode: "normal",
                          style: "",
                          text: "The setup includes building your website or integrating our content management system into your existing site, customising the look and feel to match your brand, and setting up key features like Custom Website Build, Hosting and Content Management Setup.",
                          type: "text",
                          version: 1,
                        },
                      ],
                      direction: "ltr",
                      format: "",
                      indent: 0,
                      type: "paragraph",
                      version: 1,
                      textFormat: 0,
                      textStyle: "",
                    },
                  ],
                  direction: "ltr",
                  format: "",
                  indent: 0,
                  type: "root",
                  version: 1,
                },
              },
              id: "67c8677e97a9423163bc84af",
            },
            {
              question: "Is there an onboarding fee?",
              answer: {
                root: {
                  children: [
                    {
                      children: [
                        {
                          detail: 0,
                          format: 0,
                          mode: "normal",
                          style: "",
                          text: "Yes, we charge a one-time onboarding fee to cover the initial website setup and customisation. After the first month, you'll only pay a lower monthly fee for ongoing maintenance and support.",
                          type: "text",
                          version: 1,
                        },
                      ],
                      direction: "ltr",
                      format: "",
                      indent: 0,
                      type: "paragraph",
                      version: 1,
                      textFormat: 0,
                      textStyle: "",
                    },
                  ],
                  direction: "ltr",
                  format: "",
                  indent: 0,
                  type: "root",
                  version: 1,
                },
              },
              id: "67c8678a97a9423163bc84b1",
            },
            {
              question: "Can I customise the platform to fit my brand?",
              answer: {
                root: {
                  children: [
                    {
                      children: [
                        {
                          detail: 0,
                          format: 0,
                          mode: "normal",
                          style: "",
                          text: "Absolutely! ContentFlo offers full flexibility with branding and user experience, allowing you to design the platform to match your brand's style and voice.",
                          type: "text",
                          version: 1,
                        },
                      ],
                      direction: "ltr",
                      format: "",
                      indent: 0,
                      type: "paragraph",
                      version: 1,
                      textFormat: 0,
                      textStyle: "",
                    },
                  ],
                  direction: "ltr",
                  format: "",
                  indent: 0,
                  type: "root",
                  version: 1,
                },
              },
              id: "67c867a197a9423163bc84b3",
            },
            {
              question: "Do I own my content and data?",
              answer: {
                root: {
                  children: [
                    {
                      children: [
                        {
                          detail: 0,
                          format: 0,
                          mode: "normal",
                          style: "",
                          text: "Yes! One of the core advantages of ContentFlo is that you have full ownership of your content and customer data. No third-party access — it's all under your control.",
                          type: "text",
                          version: 1,
                        },
                      ],
                      direction: "ltr",
                      format: "",
                      indent: 0,
                      type: "paragraph",
                      version: 1,
                      textFormat: 0,
                      textStyle: "",
                    },
                  ],
                  direction: "ltr",
                  format: "",
                  indent: 0,
                  type: "root",
                  version: 1,
                },
              },
              id: "67c867ab97a9423163bc84b5",
            },
          ],
          fields: [
            {
              name: "question",
              type: "text",
              required: true,
            },
            {
              name: "answer",
              type: "richText",
              required: true,
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    BoldFeature(),
                    ItalicFeature(),
                    UnderlineFeature(),
                  ];
                },
              }),
            },
          ],
        },
      ],
    },
    {
      label: "CTA",
      type: "collapsible",
      fields: [
        {
          name: "ctaTitle",
          type: "text",
          required: true,
          defaultValue: "Ready to Take Full Control of Your Content and Brand?",
        },
        {
          name: "ctaSubtitle",
          type: "richText",
          required: true,
          defaultValue: {
            root: {
              children: [
                {
                  children: [
                    {
                      detail: 0,
                      format: 0,
                      mode: "normal",
                      style: "",
                      text: "Join the waitlist to get ",
                      type: "text",
                      version: 1,
                    },
                    {
                      detail: 0,
                      format: 1,
                      mode: "normal",
                      style: "",
                      text: "early access",
                      type: "text",
                      version: 1,
                    },
                    {
                      detail: 0,
                      format: 0,
                      mode: "normal",
                      style: "",
                      text: " of the product and receive updates on the progress!",
                      type: "text",
                      version: 1,
                    },
                  ],
                  direction: "ltr",
                  format: "",
                  indent: 0,
                  type: "paragraph",
                  version: 1,
                  textFormat: 0,
                  textStyle: "",
                },
              ],
              direction: "ltr",
              format: "",
              indent: 0,
              type: "root",
              version: 1,
            },
          },
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [
                ...rootFeatures,
                FixedToolbarFeature(),
                InlineToolbarFeature(),
                BoldFeature(),
                ItalicFeature(),
                UnderlineFeature(),
              ];
            },
          }),
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateHome],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
    },
    max: 50,
  },
};
