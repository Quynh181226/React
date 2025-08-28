import type {Todo} from "../reducers/todoReducer"
import {TodoItem} from "./TodoItem"

interface TodoListProps {
    list: Todo[]
    onDelete: (id: number) => void
}

export const TodoList=({ list, onDelete }: TodoListProps)=> {
    if (list.length === 0) return <p>Job empty ^ ^</p>

    return (
        <div className="listData">
            {list.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
            ))}
        </div>
    )
}
