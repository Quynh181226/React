import React from "react"
import { useAppDispatch, useAppSelector } from "../hooks/Hook.tsx"
import { toggle } from "../slices/Ex3"

export const Ex3 = () => {
    const value = useAppSelector((state: { ChangeMode: any }) => state.ChangeMode)
    const dispatch = useAppDispatch()

    const style: React.CSSProperties =
        value === "light"
            ? {color: "black", backgroundColor: "white", padding: "60px",}
            : {padding: "60px", color: "white", backgroundColor: "#333333",}

    const styleBtn: React.CSSProperties =
        value === "light"
            ? {color: "black", backgroundColor: "white", padding: "6px", borderColor: "gray", borderRadius: "5px",}
            : {padding: "6px", color: "white", backgroundColor: "#333333", borderColor: "gray", borderRadius: "5px",}

    return (
        <div style={style}>
            <button style={styleBtn} onClick={() => dispatch(toggle())}>
                {value}
            </button>
        </div>
    )
}
