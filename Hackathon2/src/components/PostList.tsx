import type { Post } from "../type/Post.ts";
import { PostCard } from "./PostCard.tsx";

interface PostListProps {
    posts: Post[]
    onFavorite: (id: number) => void
    onEdit: (post: Post) => void
}

export const PostList = ({ posts, onFavorite, onEdit }: PostListProps) => {
    if (posts.length === 0) {
        return ""
    }
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginLeft: "30%"}}>
            {posts.map(p => (
                <PostCard key={p.id} post={p} onFavorite={onFavorite} onEdit={onEdit} />
            ))}
        </div>
    )
}