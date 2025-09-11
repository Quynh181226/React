import {useSearchParams} from "react-router-dom";
import { Button, Input } from "antd";
import {useState} from "react";


export const Student=()=>{
    const [search, setSearch] = useSearchParams()
    const [detail, setDetail]=useState<boolean>(false);

    const searchVal=search.get("student")||""

    const submit=()=>{
        if(searchVal==="") return
        setDetail(true)
    }
    return (
        <>
            <Input style={{width: 300}} value={searchVal} onChange={(e)=>setSearch({student: e.target.value})} placeholder="Input search key"></Input>
            <Button type="primary" onClick={submit}>Search</Button>
            {detail ?
                (<div>Res search: {searchVal}</div>):
                (<div>Res search: </div>)
            }
        </>
    )
}