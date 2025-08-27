import {useState} from "react";

export const Ex8_Checkbox=()=>{
    const option: string[]=["Ngủ", "Học", "Ăn"]
    const [select, setSelect]=useState<string[]>([])
    const handleChange=(val: string)=>{
        setSelect((prev)=>
            prev.includes(val)? prev.filter((e)=>e!==val):[...prev, val]
        )
    }
    return(
        <>
            <p>Hobby: [{select.map((e)=>`"${e}"`).join(", ")}]</p>
            {option.map((opt)=>
                <div key={opt}>
                    <input type="checkbox" checked={select.includes(opt)} onChange={()=>handleChange(opt)}/>
                   {opt}
                </div>
            )}
        </>
    )
}