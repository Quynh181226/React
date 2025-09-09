import { Modal, Form, Input, Button } from "antd";
import { useEffect } from "react";
import type { Post } from "../type/Post.ts";

interface PostModalProps {
    post: Post | null
    onClose: () => void
    onSave: (title: string, content: string) => void
    onDelete?: () => void
}

export const PostModal = ({ post, onClose, onSave, onDelete }: PostModalProps) => {
    const [form] = Form.useForm()

    useEffect(() => {
        if (post) {
            form.setFieldsValue({ title: post.title, content: post.content });
        } else {
            form.resetFields()
        }
    }, [post, form])

    const handleOk = () => {
        form.validateFields().then(values => {
            onSave(values.title, values.content)
        })
    }

    return (
        <Modal title={post ? "Chỉnh sửa bài viết" : "Tạo bài viết"} open={true} onCancel={onClose}
            footer={[
                post && onDelete && (
                    <Button key="delete" danger onClick={onDelete}>Xóa</Button>
                ),
                <Button key="cancel" onClick={onClose}>Hủy</Button>,
                <Button key="save" type="primary" onClick={handleOk}>{post ? "Cập nhật" : "Đăng"}</Button>
            ]}
        >
            <Form form={form} layout="vertical">
                <Form.Item name="title" label="Tiêu đề" rules={[{ required: true, message: "Vui lòng nhập tiêu đề" }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="content" label="Nội dung" rules={[{ required: true, message: "Vui lòng nhập nội dung" }]}>
                    <Input/>
                </Form.Item>
            </Form>
        </Modal>
    )
}