import { posts } from "./DataPost"
import { Link } from "react-router-dom"

export const PostList = () => {
    return (
        <div className="flex flex-col items-center gap-4">
            <p className="font-bold text-xl w-1/2">Danh sách bài viết</p>
            {posts.map((post) => (
                <div key={post.id} className="border rounded-sm border-[#5B5B5C] bg-[#F9FAFC] w-1/2 p-3 mb-4">
                    <Link to={`/blog/posts/${post.id}`} className="font-bold text-blue-600 hover:underline">{post.title}</Link>
                    <p>{post.description}</p>
                </div>
            ))}
        </div>
    )
}
