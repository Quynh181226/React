// @ts-ignore
import {Children_Comp} from "../components/Children_Comp"
import {useState} from "react"

export const Ex4_Parent_Comp=()=>{
    const [data]=useState({
        name: 'Quynh'
        // "Quynh"
    })
    return(
       <>
           <h3>Parent: {data.name}</h3>
           {/*<h3>Parent: {name}</h3>*/}
           <Children_Comp{...data}/>
           {/*<Children_Comp name={data.name} />*/}
       </>
    )
}