import { Form, Input, Button, Upload } from "antd"
import { PlusOutlined } from "@ant-design/icons"
import { useState } from "react"
import axios from "axios"
import type { Product } from "../App.tsx"

interface CardFormProps {
    onAdd: (product: Product) => void
}

const CardForm = ({ onAdd }: CardFormProps) => {
    const [imageUrl, setImageUrl] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const [form] = Form.useForm()

    const handleUpload = async (options: any) => {
        const { file, onSuccess, onError } = options
        const formData = new FormData()
        formData.append("file", file)
        formData.append("upload_preset", "React_Ra")

        try {
            setLoading(true)
            const res = await axios.post("https://api.cloudinary.com/v1_1/dtxlzevgb/image/upload", formData)
            setImageUrl(res.data.secure_url)
            onSuccess?.(res.data)
        } catch (err) {
            console.error("Lỗi upload:", err)
            onError?.(err)
        } finally {
            setLoading(false)
        }
    }

    const onFinish = (values: any) => {
        if (!imageUrl) {
            alert("Vui lòng upload ảnh")
            return
        }
        const newProduct: Product = {
            ...values,
            image: imageUrl,
        }
        onAdd(newProduct)
        form.resetFields()
        setImageUrl(null)
    }

    return (
        <div className="p-6 bg-white rounded-xl shadow-md w-1/3">
            <Form form={form} layout="vertical" onFinish={onFinish}>
                <Form.Item label="Tên sản phẩm" name="title" rules={[{ required: true, message: '"Name" is required'  }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Giá" name="price" rules={[{ required: true, message: '"Price" is required' }]}>
                    <Input type="number" />
                </Form.Item>

                <Form.Item label="Mô tả" name="description">
                    <Input.TextArea rows={3} />
                </Form.Item>

                <Form.Item label="Ảnh sản phẩm" required>
                    <Upload listType="picture-card" showUploadList={false} customRequest={handleUpload}>
                        {imageUrl ? (
                            <img src={imageUrl} alt="product" className="w-24 h-24 object-cover rounded-md"/>
                        ) : (
                            <div>
                                <PlusOutlined />
                                <div style={{ marginTop: 8 }}>
                                    {loading ? "Đang tải..." : "Upload"}
                                </div>
                            </div>
                        )}
                    </Upload>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Thêm sản phẩm
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default CardForm
