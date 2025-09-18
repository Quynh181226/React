import { Table, Tag } from "antd";
import type { Key } from "react";
import type {Post} from "./Main";

const { Column } = Table;

export interface DataType {
    key: Key
    stt: string
    title: string
    imageUrl: string
    date: string
    states: string
    actions: string[]
}

interface TableFromProps {
    data: DataType[];
    onEdit: (post: Post) => void
    onDelete: (id: string) => void
    onChangeStatus: (id: string) => void
}

function TableFrom({ data, onEdit, onDelete, onChangeStatus }: TableFromProps) {
    return (
        <Table<DataType> dataSource={data}>
            <Column title="Stt" dataIndex="stt" key="stt" />

            <Column title="Tiêu đề" dataIndex="title" key="title" />

            <Column title="Image" dataIndex="imageUrl" key="imageUrl"
                render={(imageUrl: string) => (
                    <img src={imageUrl} alt="avatar" style={{ width: 50, height: 50, borderRadius: "50%"}} />
                )}
            />

            <Column title="Ngày viết" dataIndex="date" key="date" />

            <Column title="Trạng thái" dataIndex="states" key="states"
                render={(states: string, record: DataType) => (
                    <Tag
                        color={states === "Đã xuất bản" ? "green" : "red"}
                        onClick={() => onChangeStatus(record.key.toString())}
                        style={{ cursor: "pointer" }}
                    >
                        {states}
                    </Tag>
                )}
            />

            <Column
                title="Chức năng"
                dataIndex="actions"
                key="actions"
                render={(_: string[], record: DataType) =>
                    record.actions.map((action: string) => {
                        let color;
                        if (action === "Chặn") color = "#FAAD14";
                        else if (action === "Sửa") color = "gold";
                        else if (action === "Xóa") color = "red";

                        return (
                            <Tag
                                key={action}
                                color={color}
                                onClick={() => {
                                    if (action === "Chặn") {
                                        onChangeStatus(record.key.toString());
                                    }else if (action === "Sửa") {
                                        onEdit({
                                            id: record.key as string,
                                            title: record.title,
                                            imageUrl: record.imageUrl,
                                            created: record.date,
                                            status: record.states === "Đã xuất bản",
                                            content: "",
                                        });
                                    }else if (action === "Xóa") {
                                        onDelete(record.key.toString());
                                    }
                                }}
                                style={{ cursor: "pointer" }}
                            >
                                {action}
                            </Tag>
                        )
                    })
                }
            />
        </Table>
    )
}

export default TableFrom;
