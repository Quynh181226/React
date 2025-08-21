import {useState} from "react";

export const Ex2=()=>{
    const [info]=useState({
        id: 1,
        name: "Quynh",
        dob: "18/12/26",
        address: "35A, Ntl, Hn"
    })
    return(
        <>
            <h3>Personal info: Id: {info.id} Name: {info.name} Dob: {info.dob} Address: {info.address}</h3>
        </>
    )
}