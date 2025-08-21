import {useState} from "react";

type User={
    id: number
    name: string
    age: number
}
export const Ex3=()=>{
    const [users]=useState<User[]>([
        {id: 1, name: "Thuan", age: 10},
        {id: 2, name: "Tung", age: 11},
        {id: 3, name: "Toan", age: 12},
    ])
    return(
        <table border={1.5} style={{borderCollapse: "collapse"}}>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
            </tr>
            {users.map((i)=>{
                return(
                    <tr>
                        <td>{i.id}</td>
                        <td>{i.name}</td>
                        <td>{i.age}</td>
                    </tr>
                )
            })}
        </table>
    )
}