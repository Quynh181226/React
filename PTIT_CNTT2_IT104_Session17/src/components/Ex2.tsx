import {useState} from "react";

export const Ex2=()=>{
    const [product]=useState({
        id: 1,
        name: "Cola",
        price: 1000,
        quantity: 10
    })

    return(
        <>
            <h3>Product info</h3>
            <p>ID: {product.id}</p>
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
            <p>Quantity: {product.quantity}</p>
        </>
    )
}