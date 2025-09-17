import { useEffect, useState } from "react"
import { Input, Button } from "antd"
import { TaskList } from "./TaskList"
import { Del } from "./Del"
import { ModalDel } from "./ModalDel"
import { Loading } from "./Loading"
import {ModalDeleteItem} from "./ModalDeleteItem.tsx";
import {EditModal} from "./EditModal.tsx";

export const Main = () => {
    const [tasks, setTasks] = useState<{ id: number; title: string; completed: boolean }[]>([])
    const [input, setInput] = useState("")
    const [filter, setFilter] = useState<"all" | "finished" | "spending">("all")

    const [openEdit, setOpenEdit] = useState(false)
    const [editingTask, setEditingTask] = useState<{ id: number; title: string } | null>(null)

    const [openDeleteOne, setOpenDeleteOne] = useState(false)
    const [selectedTask, setSelectedTask] = useState<{ id: number; title: string } | null>(null)

    const [modalOpen, setModalOpen] = useState(false)
    const [deleteType, setDeleteType] = useState<"all" | "completed" | null>(null)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch("http://localhost:8080/tasks")
            .then(res => res.json())
            .then(data => {
                setTasks(data)
                setLoading(false)
            })
            .catch(() => setLoading(false))
    }, [])

    const addTask = () => {
        if (input.trim() === "") return
        const newTask = { id: Date.now(), title: input, completed: false }
        setTasks([...tasks, newTask])
        setInput("")
        // có thể POST xuống server nếu muốn
        fetch("http://localhost:8080/tasks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTask)
        })
    }

    const toggleTask = (id: number) => {
        setTasks(tasks.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)))
    }

    const handleEditClick = (task: { id: number; title: string }) => {
        setEditingTask(task)
        setOpenEdit(true)
    }

    const updateTask = (id: number, newTitle: string) => {
        setTasks(tasks.map(t => (t.id === id ? { ...t, title: newTitle } : t)))
    }

    const handleDeleteClick = (task: { id: number; title: string }) => {
        setSelectedTask(task)
        setOpenDeleteOne(true)
    }

    const deleteTask = (id: number) => {
        setTasks(tasks.filter(t => t.id !== id))
    }

    const openDeleteModal = (type: "all" | "completed") => {
        setDeleteType(type)
        setModalOpen(true)
    }

    const confirmDelete = () => {
        if (deleteType === "all") setTasks([])
        if (deleteType === "completed") setTasks(tasks.filter(t => !t.completed))
        setModalOpen(false)
        setDeleteType(null)
    }

    const filteredTasks = tasks.filter(t => {
        if (filter === "finished") return t.completed
        if (filter === "spending") return !t.completed
        return true
    })

    if (loading) {
        return <Loading />
    }

    return (
        <div style={{ width: 400, margin: "20px auto", padding: 20, border: "2px solid #ddd", borderRadius: 8 }}>
            <h3 style={{ textAlign: "center" }}>Quản lý công việc</h3>

            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
                <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Nhập tên công việc" />
                <Button onClick={addTask} type="primary">Thêm công việc</Button>
            </div>

            <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                <Button type={filter === "all" ? "primary" : "default"} onClick={() => setFilter("all")}>Tất cả</Button>
                <Button type={filter === "finished" ? "primary" : "default"} onClick={() => setFilter("finished")}>Hoàn thành</Button>
                <Button type={filter === "spending" ? "primary" : "default"} onClick={() => setFilter("spending")}>Đang thực hiện</Button>
            </div>

            <TaskList tasks={filteredTasks.map((t) => ({id: t.id, title: t.title, completed: t.completed,}))} toggleTask={toggleTask} editTask={handleEditClick} deleteTask={handleDeleteClick}/>

            <Del deleteCompleted={() => openDeleteModal("completed")} deleteAll={() => openDeleteModal("all")} />

            <ModalDel open={modalOpen} type={deleteType} onCancel={() => setModalOpen(false)} onConfirm={confirmDelete} />

            <EditModal open={openEdit} task={editingTask} onCancel={() => setOpenEdit(false)}
                onUpdate={(id, newTitle) => {
                    updateTask(id, newTitle)
                    setOpenEdit(false)
                }}
            />

            <ModalDeleteItem open={openDeleteOne} taskName={selectedTask?.title || ""} onCancel={() => setOpenDeleteOne(false)}
                             onConfirm={() => {
                                 if (selectedTask) {
                                     deleteTask(selectedTask.id)
                                 }
                                 setOpenDeleteOne(false)
                             }
            }
            />
        </div>
    )
}
