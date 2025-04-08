import { allPosts } from 'content-collections'
export default function BlogList() {
    return (
        {allPosts.map((post) => (
            <li key={post.slug}>
                {post.title}
            </li>
          ))}
    )
}
