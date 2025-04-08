import {
    defineCollection,
    defineConfig,
  } from "@content-collections/core";
   
  const posts = defineCollection({
    name: "posts",
    directory: "./content/posts",
    include: "*.mdx",
    schema: (z) => ({
      title: z.string(),
      date: z.string(),
      summary: z.string(),
      slug: z.string(),
    }),
    transform: ({ _meta, ...post }) => {
      return {
        ...post,
        slug: `${_meta.path}`
      };
    },
  });
   
  export default defineConfig({
    collections: [posts],
  });