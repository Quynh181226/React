import { Card, Typography, Button } from "antd"
import { CloseOutlined } from "@ant-design/icons"

const { Text } = Typography

export const Ex7 = () => {
    return (
        <Card style={{width: 350, borderRadius: 8, boxShadow: "0 2px 6px rgba(0,0,0,0.1)"}}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 16px", borderBottom: "1px solid #f0f0f0"}}>
                <Text strong>Cảnh báo</Text>
                <Button type="text" size="small" icon={<CloseOutlined />}/>
            </div>

            <div style={{ padding: "12px 16px" }}>
                <Text>Lỗi kết nối máy chủ.</Text>
            </div>
        </Card>
    )
}
