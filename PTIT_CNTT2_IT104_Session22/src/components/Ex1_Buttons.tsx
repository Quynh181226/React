import { Button } from "antd"
export const Ex1_Buttons=()=>{
    return (
        <div style={{ display: "flex", gap: "10px", padding: "20px" }}>
            <Button type="primary">Lưu</Button>
            <Button>Hủy</Button>
            <Button style={{ backgroundColor: "green", borderColor: "green", color: "white" }}>
                Thành công
            </Button>
            <Button style={{ backgroundColor: "orange", borderColor: "orange", color: "white" }}>
                Cảnh báo
            </Button>
            <Button type="primary" danger>
                Báo lỗi
            </Button>
            <Button style={{ backgroundColor: "deepskyblue", borderColor: "deepskyblue", color: "white" }}>
                Thông tin
            </Button>
            <Button type="link"  style={{ textDecoration: "underline" }}>Đường dẫn</Button>
        </div>
    )
}