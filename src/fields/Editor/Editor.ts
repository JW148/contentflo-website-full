import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
  BoldFeature,
  UnderlineFeature,
  ItalicFeature,
  EXPERIMENTAL_TableFeature,
} from "@payloadcms/richtext-lexical";

export const editor = lexicalEditor({
  features: ({ rootFeatures }) => {
    return [
      ...rootFeatures,
      FixedToolbarFeature(),
      InlineToolbarFeature(),
      BoldFeature(),
      ItalicFeature(),
      UnderlineFeature(),
      EXPERIMENTAL_TableFeature(),
    ];
  },
});
