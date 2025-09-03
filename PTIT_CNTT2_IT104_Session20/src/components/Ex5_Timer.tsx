import {useEffect, useState} from "react";

export const Ex5_Timer=()=>{
    const[cnt, setCnt]=useState(0)
    useEffect(()=>{
        const time=setInterval(()=>{
            setCnt(prev=>prev+1)
        }, 1000)
        return()=>{
            clearInterval(time)
        }
    }, [])
    return(
        <>
            <p>{cnt}</p>
        </>
    )
}