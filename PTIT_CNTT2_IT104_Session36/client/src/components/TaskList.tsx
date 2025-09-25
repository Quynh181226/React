import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../hooks/hook"
import { deleteTask, getAllTasks, toggleTaskCompletion } from "../apis/api"
import type { Task } from "../types/task"
import TaskForm from "./TaskForm"
import FilterControls from "./FilterControls"
import TaskItem from "./TaskItem"
import {Dialog, DialogActions, DialogContent, DialogTitle, Button, CircularProgress,} from "@mui/material"
import { setSelectedTask } from "../slices/taskSlice"

export const TaskList: React.FC = () => {
    const dispatch = useAppDispatch()
    const { tasks, status, error } = useAppSelector((state) => state.task)
    const [deleteId, setDeleteId] = useState<number | null>(null)
    const [filters, setFilters] = useState({
        status: "all",
        priority: "all",
        search: "",
    })

    useEffect(() => {
        dispatch(getAllTasks())
    }, [dispatch])

    const handleDelete = (id: number) => {
        setDeleteId(id)
    }

    const confirmDelete = () => {
        if (deleteId) {
            dispatch(deleteTask(deleteId))
            setDeleteId(null)
        }
    }

    const handleEdit = (task: Task) => {
        dispatch(setSelectedTask(task))
    }

    const filteredTasks = tasks.filter((task) => {
        const matchStatus =
            filters.status === "all" ||
            (filters.status === "completed" && task.completed) ||
            (filters.status === "active" && !task.completed)

        const matchPriority =
            filters.priority === "all" || task.priority === filters.priority

        const matchSearch = task.taskName
            .toLowerCase()
            .includes(filters.search.toLowerCase())

        return matchStatus && matchPriority && matchSearch
    })

    if (error) {
        return (
            <h1 className="text-red-500 text-center">Đã có lỗi xảy ra: {error}</h1>
        )
    }

    return (
        <div className="max-w-2xl mx-auto p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6 text-center">📝 Task Manager</h1>

            {status === "pending" && (
                <div className="flex justify-center items-center h-screen flex-col gap-3 bg-gray-100 z-[9999]">
                    <CircularProgress size={48} sx={{ color: "#bfbfbf" }} />
                </div>
            )}

            <TaskForm />

            <FilterControls
                status={filters.status}
                priority={filters.priority}
                search={filters.search}
                onStatusChange={(status) => setFilters({ ...filters, status })}
                onPriorityChange={(priority) => setFilters({ ...filters, priority })}
                onSearchChange={(search) => setFilters({ ...filters, search })}
            />

            <div>
                {filteredTasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        id={task.id || 0}
                        title={task.taskName}
                        completed={task.completed}
                        priority={task.priority}
                        onToggle={() => dispatch(toggleTaskCompletion(task))}
                        onDelete={() => handleDelete(task.id || 0)}
                        onEdit={() => handleEdit(task)}
                    />
                ))}
            </div>

            <Dialog open={!!deleteId} onClose={() => setDeleteId(null)}>
               <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                   <DialogTitle>Xác nhận xóa</DialogTitle>
                   <div style={{marginRight: 20}}>
                       <svg onClick={() => setDeleteId(null)} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                   </div>
               </div>

                <DialogContent style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    Bạn có chắc muốn xóa công việc{" "}
                   <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                       <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
                       <span className="font-semibold">
                           {tasks.find((t) => t.id === deleteId)?.taskName}
                       </span>
                       <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
                   </div>
                    {" "}không?
                </DialogContent>

                <DialogActions>
                    <Button onClick={() => setDeleteId(null)} color="primary">Hủy</Button>
                    <Button onClick={confirmDelete} color="error">Xóa</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
