import { Modal, Input, Button, Form } from "antd";
import { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
// import "@uiw/react-md-editor/markdown-editor.css";
// import "@uiw/react-md-editor/markdown-preview.css";
import type { Post, PostAdd } from "./Main";
import EmptyModal from "./EmptyModal.tsx";

interface AddFromProps {
    open: boolean;
    onClose: () => void;
    addNewPost: (data: PostAdd) => Promise<void>;
    currentPostTarget: Post | undefined;
    setCurrentPost: (value: Post | undefined) => void;
    updatePost: (id: string, data: Post) => Promise<void>;
}

export default function AddFrom({open, onClose, addNewPost, currentPostTarget, setCurrentPost, updatePost,}: AddFromProps) {
    const [form] = Form.useForm();
    const [code, setCode] = useState<"Add" | "Edit">("Add");
    const [btn, setBtn] = useState<"Publish" | "Edit">("Publish");
    const [showEmptyModal, setShowEmptyModal] = useState(false);
    const [post, setPost] = useState<Post>({id: "", title: "", content: "", created: "", status: true, imageUrl: ""});
    useEffect(() => {
        if (currentPostTarget) {
            setPost(currentPostTarget);
            form.setFieldsValue({
                title: currentPostTarget.title,
                imageUrl: currentPostTarget.imageUrl,
                content: currentPostTarget.content,
            });
            setCode("Edit")
            setBtn("Edit")
        } else {
            setPost({id: "", title: "", content: "", created: "", status: true, imageUrl: "",})
            form.resetFields()
            setCode("Add")
            setBtn("Publish")
        }
    }, [currentPostTarget, form])

    const handleSubmit = async () => {
        try {
            const values = await form.validateFields()
            if (!values.title?.trim()) {
                setShowEmptyModal(true)
                return
            }
            const updatedPost = {
                ...post,
                created: new Date().toLocaleDateString("vi-VN")
            }

            if (code === "Add") {
                await addNewPost(updatedPost)
            } else {
                await updatePost(post.id, updatedPost)
            }

            onClose()
            form.resetFields();
            setPost({id: "", title: "", content: "", created: "", status: true, imageUrl: "",})
        } catch (error) {
            console.error("Error submit:", error)
        }
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setPost((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleContentChange = (value?: string) => {
        setPost((prev) => ({
            ...prev,
            content: value || ""
        }))
    }

    return (
        <>
            <Modal
                title={code === "Add" ? "Thêm mới bài viết" : "Chỉnh sửa bài viết"}
                open={open}
                onCancel={() => {
                    onClose();
                    setCurrentPost(undefined);
                }}
                footer={[
                    <Button key="reset" onClick={() => form.resetFields()}>
                        Làm mới
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleSubmit}>
                        {btn}
                    </Button>,
                ]}
            >
                <Form layout="vertical" form={form}>
                    <Form.Item name="title" label="Tiêu đề">
                        <Input name="title" onChange={handleInput} />
                    </Form.Item>
                    <Form.Item name="imageUrl" label="Hình ảnh">
                        <Input name="imageUrl" onChange={handleInput} />
                    </Form.Item>
                    <Form.Item name="content" label="Nội dung">
                        {/*rules={[{ required: true, message: "Vui lòng nhập nội dung" }]}*/}
                        <MDEditor value={post.content} onChange={handleContentChange} preview="edit" height={300} style={{background: "white", color: "black"}}/>
                    </Form.Item>
                </Form>
            </Modal>
            <EmptyModal open={showEmptyModal} onClose={() => setShowEmptyModal(false)} />
        </>
    )
}