import { Spin } from "antd"
import {LoadingOutlined} from "@ant-design/icons";

export const Loading = () => {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column", gap: 12, backgroundColor: "#f0f0f0", zIndex: 9999}}>
            <Spin indicator={<LoadingOutlined spin />} size="large" style={{color:"#bfbfbf"}}/>
        </div>
    )
}
