import {ChildrenC} from "../components/ChildrenC"
import {useState} from "react"

export const Ex5_ParentC=()=>{
    const [data]=useState({
        id: 1,
        name: 'Flower',
        price: 10,
        quantity: 1
    })
    return(
        <>
            <h3>Parent: {data.id} {data.name} {data.price} {data.quantity}</h3>
            <ChildrenC{...data}/>
            {/*<ChildrenC name={data.id} id={data.name} price={data.price} quantity={data.quantity />*/}
        </>
    )
}