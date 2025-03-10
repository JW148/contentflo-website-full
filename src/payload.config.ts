// storage-adapter-import-placeholder
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { muxVideoPlugin } from "@oversightstudio/mux-video";
import { nodemailerAdapter } from "@payloadcms/email-nodemailer";

//Collections
import { Users } from "./collections/Users";
import { Media } from "./collections/Media";

//Globals
import { Home } from "./globals/home/config";
import { Analytics } from "./globals/UmamiAnalytics/config";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    theme: "dark",
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: "- ContentFlo",
      title: "Dashboard",
      description: "ContentFlo Admin Dashboard",
      icons: [
        {
          rel: "icon",
          type: "image/svg+xml",
          url: "/cf_icon.ico",
        },
      ],
    },
    livePreview: {
      url: process.env.NEXT_PUBLIC_PAYLOAD_URL,
      globals: ["home"],
    },
    components: {
      beforeDashboard: ["@/components/Dashboard/BeforeDashboard"],
      graphics: {
        Logo: "@/components/Dashboard/AdminLogo",
        Icon: "@/components/Dashboard/AdminIcon",
      },
    },
  },
  collections: [Users, Media],
  globals: [Home, Analytics],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  sharp,
  plugins: [
    muxVideoPlugin({
      enabled: true,
      adminThumbnail: "image",
      initSettings: {
        tokenId: process.env.MUX_TOKEN_ID || "",
        tokenSecret: process.env.MUX_TOKEN_SECRET || "",
        webhookSecret: process.env.MUX_WEBHOOK_SIGNING_SECRET || "",
      },
      uploadSettings: {
        cors_origin:
          process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000",
      },
    }),
  ],
  email: nodemailerAdapter({
    defaultFromAddress: "support@contentflo.io",
    defaultFromName: "ContentFlo Support",
    // Nodemailer transportOptions
    transportOptions: {
      host: process.env.SMTP_HOST,
      port: 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    },
  }),
  telemetry: false,
});
