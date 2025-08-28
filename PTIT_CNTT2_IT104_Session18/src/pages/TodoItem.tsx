import {type Todo } from "../reducers/todoReducer"

interface TodoItemProps {
    todo: Todo
    onDelete: (id: number) => void
}

export const TodoItem=({ todo, onDelete }: TodoItemProps)=> {
    return (
        <div className="item">
            <p>{todo.content}</p>
            <button onClick={() => onDelete(todo.id)}>Del</button>
        </div>
    )
}
