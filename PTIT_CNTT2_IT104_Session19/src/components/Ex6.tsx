import { useEffect, useState } from "react"

export const Ex6 = () => {
    const [key, setKey] = useState("")

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            setKey(e.key);
        }
        window.addEventListener("keydown", handler)
        return () => {
            window.removeEventListener("keydown", handler)
        }
    })

    const style={
        fontSize: "25px", padding: "8px"
    }

    return (
        <>
            <p>Phim ban vua bam:</p>
            <div style={style}>{key}</div>
        </>
    )
}