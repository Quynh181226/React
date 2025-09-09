import { HeartOutlined, HeartFilled } from "@ant-design/icons"
import type { Post } from "../type/Post.ts"
import { Card, Avatar } from "antd"

const { Meta } = Card

interface PostCardProps {
    post: Post
    onFavorite: (id: number) => void
    onEdit: (post: Post) => void
}

export const PostCard = ({ post, onFavorite, onEdit }: PostCardProps) => {
    return (
        <Card style={{width: "55%"}}
            onClick={() => onEdit(post)}
            actions={[
                post.favorite ?
                (
                    <HeartFilled key="favorite" style={{ color: "red", fontSize: 20 }} onClick={e => (e.stopPropagation(), onFavorite(post.id))}/>) : (
                    <HeartOutlined key="favorite" style={{ color: "gray", fontSize: 20 }} onClick={e => (e.stopPropagation(), onFavorite(post.id))}/>
                ), <Avatar key="avatar">S</Avatar>
            ]}
        >
            <Meta
                title={post.title}
                description={post.content}
            />
        </Card>
    )
}
