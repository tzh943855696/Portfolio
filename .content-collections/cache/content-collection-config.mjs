// content-collections.ts
import {
  defineCollection,
  defineConfig
} from "@content-collections/core";
var posts = defineCollection({
  name: "posts",
  directory: "./content/posts",
  include: "*.mdx",
  schema: (z) => ({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    slug: z.string()
  }),
  transform: ({ _meta, ...post }) => {
    return {
      ...post,
      slug: `${_meta.path}`
    };
  }
});
var content_collections_default = defineConfig({
  collections: [posts]
});
export {
  content_collections_default as default
};
