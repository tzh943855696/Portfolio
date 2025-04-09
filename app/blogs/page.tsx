import { allPosts } from 'content-collections'
export default function BlogList() {
    console.log(allPosts)
    return (
        
        <ul>
            {allPosts.map((post) => (
                <li key={post.slug}>
                        {post.title}
                </li>
            ))}
        </ul>
    )
}
