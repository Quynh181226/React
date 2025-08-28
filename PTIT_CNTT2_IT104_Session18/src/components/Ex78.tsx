import { useEffect, useReducer, useState } from "react"
import { todoReducer, type StateType } from "../reducers/todoReducer"
import {TodoInput} from "../pages/TodoInput"
import {TodoList} from "../pages/TodoList"
import "../index.css"

export  const Ex78=()=> {
    const [state, dispatch] = useReducer(todoReducer, { listData: [] } as StateType)
    const [inputValue, setInputValue] = useState("")

    useEffect(() => {
        const stored = localStorage.getItem("todos")
        if (stored) {
            dispatch({ type: "SET_DATA", payload: JSON.parse(stored) })
        }
    }, [])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch({ type: "ADD", payload: inputValue })
        setInputValue("")
    }

    const handleDelete = (id: number) => {
        // if (confirm)
            dispatch({ type: "DELETE", payload: id })
    }

    return (
        <>
            <TodoInput
                value={inputValue}
                onChange={setInputValue}
                onSubmit={handleSubmit}
            />
            <TodoList list={state.listData} onDelete={handleDelete} />
        </>
    )
}
