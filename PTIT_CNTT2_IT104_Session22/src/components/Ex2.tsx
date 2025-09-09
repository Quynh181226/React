import { Input } from "antd";

export const Ex2=()=> {
    return (
        <div style={{display: "flex", flexDirection: "column", gap: 5}}>
            <Input size="large" placeholder="Input cỡ lớn" style={{width: 300}}/>
            <Input placeholder="Input cỡ trung bình" style={{width: 300}}/>
            <Input size="small" placeholder="Input cỡ nhỏ" style={{width: 300}}/>
        </div>
    );
}
