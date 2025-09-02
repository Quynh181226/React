import {useMemo} from "react";

export const Ex1_ShoppingCart=()=>{
    const cartItems=[
        {id: 1, name: "Product1", price: 1000, quantity: 2},
        {id: 2, name: "Product2", price: 1000, quantity: 2},
    ]
    const calTotal=useMemo(()=>{
        return cartItems.reduce((sum, curr) =>sum+(curr.price*curr.quantity), 0)
    }, [cartItems])
    return(
        <>
            <p>Total order: {calTotal.toLocaleString("vi-VN")} VNĐ</p>
        </>
    )
}
