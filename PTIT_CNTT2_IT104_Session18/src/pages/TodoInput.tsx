import {type FormEvent } from "react"

interface TodoFormProps {
    value: string
    onChange: (val: string) => void
    onSubmit: (e: FormEvent) => void
}

export const TodoInput=({ value, onChange, onSubmit }: TodoFormProps)=> {
    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Input job name" value={value} onChange={(e) => onChange(e.target.value)}/>
        </form>
    )
}

