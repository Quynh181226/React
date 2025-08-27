import {useState} from "react";

export const Ex7_Select=()=>{
    const [city, setCity]=useState("")

    const cities: string[]=[
        "Hn", "Nb", "Th", "Na"
    ]
    return(
        <>
            <p>City: {city}</p>
            <select value={city} onChange={(e)=>setCity(e.target.value)}>
                <option value="">---Choice city---</option>
                {cities.map((c, idx)=>
                    <option key={idx} value={c}>{c}</option>
                )}
            </select>
        </>
    )
}