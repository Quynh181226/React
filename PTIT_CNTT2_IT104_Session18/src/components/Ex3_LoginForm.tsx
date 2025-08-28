import { useCallback, useState, type FormEvent } from "react"

export const Ex3_LoginForm = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({email, password})
    }, [email, password])

    return (
        <form onSubmit={handleSubmit}>
            <div>Email</div>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>

            <div>Password</div>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

            <button type="submit">Submit</button>
        </form>
    )
}
