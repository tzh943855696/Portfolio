import { allPosts } from "content-collections";
import { notFound } from "next/navigation";
import { MDXRemote } from 'next-mdx-remote/rsc'
import { components } from "@/app/components/mdx-components";
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import 'highlight.js/styles/atom-one-dark.min.css'

type BlogsPageProps = {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const options = {
    mdxOptions: {
        remarkPlugins: [remarkGfm, remarkMath],
        rehypePlugins: [
          rehypeKatex,
          rehypeHighlight,
          rehypeSlug
        ],
    }
  }

export async function generateStaticParams(): Promise<string[]> {
  // @ts-ignore
  return allPosts.map((blog: any) => ({
    slug: blog.slug.split("/"),
  }));
}

async function getBlogsFromParams(slugs: string[]) {
    const slug = slugs?.join("/") || ""
    const blog = allPosts.find((blog: any) => blog.slug === slug)
    if (!blog) {
      return null
    }
  
    return blog
}

export default async function Page(props: BlogsPageProps) {
  const { slug } = await props.params
  console.log(slug)
  const blog = await getBlogsFromParams(slug)
  if(!blog) {
    notFound()
  }
  return (<div>
    <MDXRemote source={blog.content} components={components} options={options}/>
  </div>);
}
