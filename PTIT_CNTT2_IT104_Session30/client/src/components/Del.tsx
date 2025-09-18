import { Button } from "antd"

export const Del = (
    { deleteCompleted, deleteAll }: {
        deleteCompleted: () => void,
        deleteAll: () => void
    }
) => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16 }}>
            <Button type="primary" danger onClick={deleteCompleted}>Xóa công việc hoàn thành</Button>
            <Button type="primary" danger onClick={deleteAll}>Xóa tất cả công việc</Button>
        </div>
    )
}
