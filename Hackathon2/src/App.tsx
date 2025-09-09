import { useState, useEffect } from "react"
import { type Post } from "./type/Post"
import "./index.css"
import {Header} from "./components/Header"
import {PostList} from "./components/PostList"
import {PostModal} from "./components/PostModal"

function App() {
    const [posts, setPosts] = useState<Post[]>([])
    const [filter, setFilter] = useState<"all" | "favorite">("all")
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingPost, setEditingPost] = useState<Post | null>(null)

    // --- localStorage helpers ---
    const STORAGE_KEY = "posts"

    const savePosts = (posts: Post[]) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
    }

    const loadPosts = (): Post[] => {
        const data = localStorage.getItem(STORAGE_KEY)
        return data ? JSON.parse(data) : []
    }
    // ----------------------------

    useEffect(() => {
        setPosts(loadPosts())
    }, [])

    useEffect(() => {
        savePosts(posts)
    }, [posts])

    const addPost = (title: string, content: string) => {
        const newPost: Post = { id: Date.now(), title, content, favorite: false }
        setPosts([...posts, newPost])
    }

    const updatePost = (updated: Post) => {
        setPosts(posts.map(p => (p.id === updated.id ? updated : p)))
    }

    const deletePost = (id: number) => {
        setPosts(posts.filter(p => p.id !== id))
    }

    const toggleFavorite = (id: number) => {
        setPosts(posts.map(p => (p.id === id ? { ...p, favorite: !p.favorite } : p)))
    }

    const filteredPosts = filter === "all" ? posts : posts.filter(p => p.favorite)

    return (
        <div
            style={{
                height: "100vh",
                background: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
                padding: 24
            }}
        >
            <Header posts={posts} filter={filter} setFilter={setFilter} onCreate={() => setIsModalOpen(true)} />
            <PostList
                posts={filteredPosts}
                onFavorite={toggleFavorite}
                onEdit={post => {
                    setEditingPost(post)
                    setIsModalOpen(true)
                }}
            />
            {isModalOpen && (
                <PostModal
                    post={editingPost}
                    onClose={() => {
                        setIsModalOpen(false)
                        setEditingPost(null)
                    }}
                    onSave={(title, content) => {
                        if (editingPost) {
                            updatePost({ ...editingPost, title, content })
                        } else {
                            addPost(title, content)
                        }
                        setIsModalOpen(false)
                        setEditingPost(null)
                    }}
                    onDelete={
                        editingPost
                            ? () => {
                                deletePost(editingPost.id)
                                setIsModalOpen(false)
                                setEditingPost(null)
                            }
                            : undefined
                    }
                />
            )}
        </div>
    )
}

export default App
