import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import debounce from "lodash.debounce";
import { Header } from "./Header.tsx";
import TableFrom, { type DataType } from "./TableFrom.tsx";
import AddFrom from "./AddFrom.tsx";

export interface Post {
    id: string
    title: string
    content: string
    created: string
    status: boolean
    imageUrl: string
}

export interface PostAdd {
    title: string
    content: string
    created: string
    status: boolean
    imageUrl: string
}

const Main = () => {
    const [data, setData] = useState<DataType[]>([])
    const [posts, setPosts] = useState<Post[]>([])
    const [openModal, setOpenModal] = useState(false)
    const [currentPost, setCurrentPost] = useState<Post | undefined>(undefined)

    const mapData = (posts: Post[]): DataType[] =>
        posts.map((e) => ({
            key: e.id,
            stt: e.id,
            title: e.title,
            imageUrl: e.imageUrl,
            date: e.created,
            states: e.status ? "Đã xuất bản" : "Ngừng xuất bản",
            actions: ["Sửa", "Xóa", "Chặn"],
        }))

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get("http://localhost:8080/posts");
                setPosts(res.data)
                setData(mapData(res.data))
            } catch (error) {
                console.error("Error fetchPosts:", error)
            }
        }
        fetchPosts()
    }, [])

    const addNewPost = async (data: PostAdd) => {
        try {
            await axios.post("http://localhost:8080/posts", data);
            const updated = await axios.get("http://localhost:8080/posts");
            setPosts(updated.data)
            setData(mapData(updated.data))
        } catch (err) {
            console.error("Error addNewPost:", err)
        }
    }

    const updatePost = async (id: string, data: Post) => {
        try {
            await axios.put(`http://localhost:8080/posts/${id}`, data);
            const updated = await axios.get("http://localhost:8080/posts");
            setPosts(updated.data);
            setData(mapData(updated.data))
        } catch (err) {
            console.error("Error update:", err)
        }
    }

    const handleDeletePost = async (id: string) => {
        try {
            await axios.delete(`http://localhost:8080/posts/${id}`);
            const updated = await axios.get("http://localhost:8080/posts");
            setPosts(updated.data);
            setData(mapData(updated.data))
        } catch (error) {
            console.error("Error del:", error)
        }
    }

    const changeStatus = async (id: string) => {
        const post = posts.find((a) => a.id === id)
        if (!post) return;
        try {
            const res = await axios.patch(`http://localhost:8080/posts/${id}`, {
                status: !post.status,
            });
            setPosts((prev) => prev.map((e) => (e.id === id ? res.data : e)))
            setData((prev) =>
                prev.map((e) => e.key === id ? { ...e, states: res.data.status ? "Đã xuất bản" : "Ngừng xuất bản" } : e)
            )
        } catch (err) {
            console.error("Error status:", err)
        }
    }

    const handleSearch = useCallback(
        debounce((text: string) => {
            const filtered = text ? posts.filter((a) => a.title.toLowerCase().includes(text.toLowerCase())) : posts;
            setData(mapData(filtered))
        }, 500),
        [posts]
    )

    const handleSelect = (code: number) => {
        let filtered = posts;
        if (code === 1) {
            filtered = posts.filter((a) => a.status)
        } else if (code === 2) {
            filtered = posts.filter((a) => !a.status)
        }
        setData(mapData(filtered))
    }

    const handleModal = () => {
        setOpenModal(!openModal)
        if (!openModal) setCurrentPost(undefined)
    }

    const editModal = (post: Post) => {
        setCurrentPost(post)
        setOpenModal(true)
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Header handleSearch={handleSearch} handleSelect={handleSelect} openModal={handleModal} />
            <TableFrom data={data} onEdit={editModal} onDelete={handleDeletePost} onChangeStatus={changeStatus} />
            <AddFrom open={openModal} onClose={handleModal} addNewPost={addNewPost} currentPostTarget={currentPost} setCurrentPost={setCurrentPost} updatePost={updatePost}/>
        </div>
    );
};

export default Main;