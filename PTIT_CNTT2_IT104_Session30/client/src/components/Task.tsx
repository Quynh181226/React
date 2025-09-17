import { Checkbox } from "antd"
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"

export interface Task {
    id: number
    title: string
    completed: boolean
}

export interface TaskProps {
    task: Task
    toggleTask: (id: number) => void
    editTask: (task: Task) => void
    deleteTask: (task: Task) => void
}

export const Task = ({ task, toggleTask, editTask, deleteTask }: TaskProps) => {
    return (
        <div style={{display: "flex", justifyContent: "space-between", padding: 8, border: "1px solid #eee", borderRadius: 4, marginBottom: 8}}>
            <Checkbox checked={task.completed} onChange={() => toggleTask(task.id)}>
                <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                    {task.title}
                </span>
            </Checkbox>
            <div style={{ display: "flex", gap: 8 }}>
                <EditOutlined style={{ color: "#FFC832", cursor: "pointer" }} onClick={() => editTask(task)}/>
                <DeleteOutlined style={{ color: "red", cursor: "pointer" }} onClick={() => deleteTask(task)}/>
            </div>
        </div>
    )
}
