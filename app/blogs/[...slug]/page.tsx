import { allPosts } from "content-collections";
import { notFound } from "next/navigation";
import { MDXRemote } from 'next-mdx-remote/rsc'

type BlogsPageProps = {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
export async function generateStaticParams(): Promise<string[]> {
  // @ts-ignore
  return allPosts.map((blog: any) => ({
    slug: blog.slug.split("/"),
  }));
}

async function getBlogsFromParams(slugs: string[]) {
    const slug = slugs?.join("/") || ""
    const blog = allPosts.find((blog: any) => blog.slug === slug)
    debugger
    if (!blog) {
      return null
    }
  
    return blog
}

export default async function Page(props: BlogsPageProps) {
  const { slug } = await props.params
  const blog = await getBlogsFromParams(slug)
  if(!blog) {
    notFound()
  }
  return (<div>
    <MDXRemote source={blog.content}/>
  </div>);
}
