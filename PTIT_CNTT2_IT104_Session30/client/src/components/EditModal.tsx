import { Modal, Input } from "antd"
import { useState, useEffect } from "react"

interface EditModalProps {
    open: boolean
    task: { id: number; title: string } | null
    onCancel: () => void
    onUpdate: (id: number, newTitle: string) => void
}

export const EditModal = (
    { open, task, onCancel, onUpdate }: EditModalProps
) => {
    const [value, setValue] = useState("")

    useEffect(() => {
        if (task) {
            setValue(task.title)
        }
    }, [task])

    return (
        <Modal open={open} title="Sửa công việc" onCancel={onCancel} footer={null}>
            <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Nhập tên công việc"/>

            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 16, gap: 8 }}>
                <button onClick={onCancel} style={{ border: "1px solid #ddd", padding: "6px 12px", borderRadius: 4 }}>
                    Hủy
                </button>

                <button style={{ background: "#1677ff", color: "#fff", border: "none", padding: "6px 12px", borderRadius: 4 }}
                        onClick={() => {
                            if (task) {
                                onUpdate(task.id, value)
                            }
                        }}
                >
                    Cập nhật
                </button>
            </div>
        </Modal>
    )
}
