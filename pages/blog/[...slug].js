import { useRouter } from "next/router"

export default function AllBlogPostsPage() {
    const router = useRouter();

    console.log("pathname:", router.pathname)
    console.log("query:", router.query)

    return (
        <div>
            <h1>All Blog Posts</h1>
            <ul>
                {router.query.slug?.map((path) => <li>{path}</li>)}
            </ul>
        </div>
    )
}