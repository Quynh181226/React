import { Button, Input, Select } from "antd";

interface HeaderProps {
    handleSearch: (text: string) => void;
    handleSelect: (code: number) => void;
    openModal: () => void;
}

export const Header = ({ handleSearch, handleSelect, openModal }: HeaderProps) => {
    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <div style={{ display: "flex", flexDirection: "row", gap: 12 }}>
                <Input placeholder="Nhập từ khóa tìm kiếm" onChange={(e) => handleSearch(e.target.value)} />
                <Select
                    placeholder="Lọc bài viết"
                    style={{ width: 160 }}
                    onChange={(value) => handleSelect(Number(value))}
                    options={[
                        { value: 0, label: "Tất cả" },
                        { value: 1, label: "Đã xuất bản" },
                        { value: 2, label: "Ngừng xuất bản" },
                    ]}
                />
            </div>
            <div>
                <Button type="primary" onClick={openModal}>
                    Thêm mới bài viết
                </Button>
            </div>
        </div>
    )
}