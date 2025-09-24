import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface User {
    id: number
    name: string
    favorited: boolean
}

const initialState: User[] = [
    { id: 1, name: "Nguyễn Văn A", favorited: true },
    { id: 2, name: "Nguyễn Văn B", favorited: false },
    { id: 3, name: "Nguyễn Văn C", favorited: true },
    { id: 4, name: "Nguyễn Văn D", favorited: true },
]

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        toggleFavorite: (state, action: PayloadAction<number>) => {
            return state.map((u) =>
                u.id === action.payload ? { ...u, favorited: !u.favorited } : u
            )
        },
    },
})

export default favoriteSlice.reducer
export const { toggleFavorite } = favoriteSlice.actions
