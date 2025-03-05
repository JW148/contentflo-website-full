// storage-adapter-import-placeholder
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { muxVideoPlugin } from "@oversightstudio/mux-video";

//Collections
import { Users } from "./collections/Users";
import { Media } from "./collections/Media";

//Globals
import { Home } from "./globals/home/config";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    livePreview: {
      url: process.env.NEXT_PUBLIC_PAYLOAD_URL,
      globals: ["home"],
    },
  },
  collections: [Users, Media],
  globals: [Home],
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
  telemetry: false,
});
