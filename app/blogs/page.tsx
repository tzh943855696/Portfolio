import { allPosts } from 'content-collections'
import Link from 'next/link'
import count from 'word-count'
export default function BlogList() {
    console.log(allPosts)
    return (
        <>
            <h3 className="my-4">BLOG LIST</h3>
            {allPosts.map((post) => (
                <article className="w-full flex flex-col mb-8" key={post.slug}>
                    <Link href={`/blogs/${post.slug}`}>
                        <div className='flex justify-between w-full mb-2'>
                            <h2 className='text-xl font-semibold underline underline-offset-4'>{post.title}</h2>
                            <span className='text-sm text-gray-500 leading-[28px]'>{new Date(post.date).toLocaleDateString('zh-CN', {
                                year: 'numeric',
                                month: 'numeric',
                                day: 'numeric'
                            }).replace(/\//g, '年').replace(/\//g, '月') + '日'} · {count(post.content)} 字</span>
                        </div>
                        <p className='text-base text-gray-600 line-clamp-2'>
                            {post.summary}
                        </p>
                    </Link>
                </article>
            ))}
        </>

    )
}
