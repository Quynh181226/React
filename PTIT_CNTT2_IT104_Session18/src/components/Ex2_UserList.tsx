import {useMemo, useState} from "react";

type User={
    id: number
    name: string
    age: number
}
export const Ex2_UserList=()=>{
    const [users]=useState<User[]>([
        {id: 1, name: "Quỳnh", age: 18},
        {id: 2, name: "Nhi", age: 19},
        {id: 3, name: "Tú", age: 19}
    ])
    const fil=useMemo(()=>{
        return users.filter((e)=>e.age > 18)
    }, [users])
    return(
        <>
            {fil.map((e)=>(
                <div key={e.id}>
                    <p>ID: {e.id} Name: {e.name} Age: {e.age}</p>
                </div>
            ))}
        </>
    )
}