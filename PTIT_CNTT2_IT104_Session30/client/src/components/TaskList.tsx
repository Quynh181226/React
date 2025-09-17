import { Task as TaskComponent } from "./Task"

export interface Task {
    id: number
    title: string
    completed: boolean
}

interface TaskListProps {
    tasks: Task[]
    toggleTask: (id: number) => void
    deleteTask: (task: Task) => void
    editTask: (task: Task) => void
}

export const TaskList = ({ tasks, toggleTask, deleteTask, editTask }: TaskListProps) => {
    return (
        <div style={{ marginBottom: 16 }}>
            {tasks.map(task => (
                <TaskComponent key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} editTask={editTask}/>
            ))}
            {tasks.length === 0 && (<p style={{ textAlign: "center", color: "#999" }}>Không có công việc nào</p>)}
        </div>
    )
}
