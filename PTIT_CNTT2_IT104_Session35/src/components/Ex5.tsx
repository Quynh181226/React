import React from "react"
import {
    DashboardOutlined,
    DollarOutlined,
    FileOutlined,
    LeftOutlined,
    LineChartOutlined,
    RightOutlined,
    UserOutlined,
} from "@ant-design/icons"
import { useAppDispatch, useAppSelector } from "../hooks/Hook.tsx"
import { toggleMenubar } from "../slices/Ex5"

export const Ex5 = () => {
    const dispatch = useAppDispatch()
    const mode = useAppSelector((state) => state.Menubar)

    const spanStyle: React.CSSProperties = {
        visibility: mode === "expanded" ? "visible" : "hidden",
        width: mode === "expanded" ? "auto" : "0",
        marginLeft: mode === "expanded" ? "5px" : "0",
    }

    return (
        <div className="menuContainer">
            <div>
                <DashboardOutlined /> <span style={spanStyle}>Bảng điều khiển</span>
            </div>
            <div>
                <UserOutlined /> <span style={spanStyle}>Tài khoản</span>
            </div>
            <div>
                <DollarOutlined /> <span style={spanStyle}>Tài sản</span>
            </div>
            <div>
                <LineChartOutlined /> <span style={spanStyle}>Thống kê</span>
            </div>
            <div>
                <FileOutlined /> <span style={spanStyle}>Tài liệu</span>
            </div>
            <div onClick={() => dispatch(toggleMenubar())}>
                {mode === "shrunk" ? <RightOutlined /> : <LeftOutlined />}
                <span style={spanStyle}>Thu gọn</span>
            </div>
        </div>
    )
}
