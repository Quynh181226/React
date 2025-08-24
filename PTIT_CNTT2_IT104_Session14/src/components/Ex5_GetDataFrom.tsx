import { useState, type ChangeEvent, type FormEvent } from "react";

interface Product {
    id: number
    name: string
    price: number
    quantity: number
}

export const Ex5_GetDataFrom = () => {
    const [product, setProduct] = useState<Product>({
        id: 0,
        name: "",
        price: 0,
        quantity: 0,
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: name === "id" || name === "price" || name === "quantity"
                ? Number(value)
                : value,
        })
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log("Product object:", product)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Input product info</h2>

            <p>Product code:</p>
            <input type="number" name="id" value={product.id} onChange={handleChange}/>

            <p>Product name:</p>
            <input type="text" name="name" value={product.name} onChange={handleChange}/>

            <p>Price:</p>
            <input type="number" name="price" value={product.price} onChange={handleChange}/>

            <p>Quantity:</p>
            <input type="number" name="quantity" value={product.quantity} onChange={handleChange}/>

            <br/>
            <button type="submit">Submit</button>
        </form>
    )
}