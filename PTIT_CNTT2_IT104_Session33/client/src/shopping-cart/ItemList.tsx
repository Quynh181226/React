import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import type { ItemType } from "../reducers/ItemReducer.ts";
import Mummum from "../assets/Mummum.jpg"

export const ItemList = () => {
    const [items, setItems] = useState<ItemType[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("http://localhost:8080/items")
            .then((res) => res.json())
            .then((data: ItemType[]) => setItems(data))
            .catch((err) => console.error("Error fetching items:", err));
    }, []);

    const handleAdd = (item: ItemType) => {
        dispatch({ type: "ADD_CART", payload: { id: item.id } });
        dispatch({ type: "CART_RECEIVE", payload: item });
        dispatch({ type: "ADDED" });
        setTimeout(() => {
            dispatch({ type: "OFF" });
        }, 2000);
    };

    return (
        <div style={{ border: "1px solid rgb(52, 122, 182)", width: "50%", borderRadius: 5 }}>
            <h4 style={{ color: "white", backgroundColor: "rgb(52, 122, 182)", margin: "0px", padding: "8px" }}>
                Product List
            </h4>
            {items.map((p) => (
                <div key={p.id}>
                    <div><img src={Mummum}  style={{ width: "150px", height: "100%", borderRadius: "5px" }} /></div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "7px", width: "150%" }}>
                        <h4>{p.name}</h4>
                        <p>{p.description}</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "50%" }}>
                        <span style={{ border: "1px solid gray", padding: "15px", visibility: p.quantity === 0 ? "hidden" : "visible", borderRadius: "3px", textAlign: "center" }}>
                            {p.quantity}
                        </span>
                        <button disabled={p.quantity === 0} onClick={() => handleAdd(p)} style={{color: "white", backgroundColor: p.quantity === 0 ? "gray" : "#fe6347", borderRadius: "3px", border: "none", cursor: "pointer", transition: "all 0.3s ease"}}>
                            {p.price} USD
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};