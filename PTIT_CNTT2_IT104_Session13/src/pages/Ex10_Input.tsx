import { useState } from 'react'

export const Ex10_Input = () => {
    const [data,setData] = useState("")
    const handleInput = (event : React.ChangeEvent<HTMLInputElement>)=>{
        setData(event.target.value)
    }
    return (
        <div  style={{display:"flex", flexDirection:"column", width:"10%"}}>
            <h3>Data: {data}</h3>
            <input type="text" onChange={handleInput}/>
        </div>
    )
}