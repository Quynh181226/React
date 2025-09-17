import { Modal } from "antd"

interface ModalDeleteItemProps {
    open: boolean
    taskName: string | null
    onCancel: () => void
    onConfirm: () => void
}

export const ModalDeleteItem = ({ open, taskName, onCancel, onConfirm }: ModalDeleteItemProps) => {
    return (
        <Modal title={<span>Xác nhận</span>} open={open} onCancel={onCancel} onOk={onConfirm} okText="Xóa" cancelText="Hủy" okButtonProps={{ danger: true }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#DC2626"> <path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40  360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83  31.5-156T197-763q54-54 127-85.5T480-880q83  0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134  0 227-93t93-227q0-134-93-227t-227-93q-134   0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                </svg>
                <div style={{display: "flex", alignItems: "center" }}>
                    Bạn có chắc chắn muốn xóa công việc
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M576-240 336-480l240-240 51 51-189 189 189 189-51 51Z"/></svg>
                    <b>{taskName}</b>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M522-480 333-669l51-51 240 240-240 240-51-51 189-189Z"/></svg>
                    không?
                </div>
            </div>
        </Modal>
    )
}
