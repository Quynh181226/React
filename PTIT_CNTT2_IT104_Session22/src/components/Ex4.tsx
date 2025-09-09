import { Dropdown, Space } from "antd";
import type { MenuProps } from "antd";


const items: MenuProps["items"] = [
    {
        label: "Cài đặt",
        key: "1",
    },
    {
        label: "Đổi mật khẩu",
        key: "2",
    },
    {
        label: "Đăng xuất",
        key: "3",
        danger: true,
    },
]

const handleMenuClick: MenuProps["onClick"] = (e) => {
    console.log("Bạn chọn:", e.key)
}

export const Ex4=()=> {
    return (
        <Space>
            <Dropdown.Button menu={{ items, onClick: handleMenuClick }}>
                Nguyễn Văn Nam
            </Dropdown.Button>
        </Space>
    )
}
