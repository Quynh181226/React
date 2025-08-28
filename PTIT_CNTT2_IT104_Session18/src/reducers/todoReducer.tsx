export interface Todo {
    id: number
    content: string
    isDone: boolean
}

export interface StateType {
    listData: Todo[]
}

export type ActionType =
    | { type: "ADD"; payload: string }
    | { type: "DELETE"; payload: number }
    | { type: "SET_DATA"; payload: Todo[] }

export const todoReducer=(state: StateType, action: ActionType): StateType =>{
    switch (action.type) {
        case "ADD": {
            if (!action.payload.trim()) return state
            const newTodo: Todo = {
                id:
                    state.listData.length > 0
                        ? state.listData[state.listData.length - 1].id + 1
                        : 1,
                content: action.payload,
                isDone: false,
            }
            const updateList = [...state.listData, newTodo]
            localStorage.setItem("todos", JSON.stringify(updateList))
            return { listData: updateList }
        }

        case "DELETE": {
            const updateList = state.listData.filter(
                (todo) => todo.id !== action.payload
            )
            localStorage.setItem("todos", JSON.stringify(updateList))
            return { listData: updateList }
        }

        case "SET_DATA": {
            return { listData: action.payload }
        }

        default:
            return state
    }
}
