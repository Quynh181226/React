import { useEffect, useState } from "react";
import type { ItemType } from "../reducers/ItemReducer";
import { useDispatch, useSelector } from "react-redux";
import type { RootType } from "../store/Store";

type Prop = {
    index: number;
    item: ItemType;
};

export const TableRow = ({ item, index }: Prop) => {
    const { products, cart } = useSelector((state: RootType) => state);
    const dispatch = useDispatch();

    const handleDelete = (id: number, quantity: number) => {
        const confirmDelete = window.confirm(
            "Bạn có chắc muốn xóa sản phẩm này khỏi giỏ?"
        );
        if (confirmDelete) {
            dispatch({ type: "DELETE_ITEM", payload: id });
            dispatch({
                type: "RESTORE_QUANTITY",
                payload: { id: id, quantity: quantity },
            });
            alert("Xoá thành công!");
        }
    };

    const handleUpdate = (product: ItemType) => {
        if (!amount) return;

        if (
            products.some((p: { id: number; initialQuantity: any; }) => p.id === product.id && p.initialQuantity! < amount)
        ) {
            alert("Không đủ hàng trong kho!");
            return;
        }

        dispatch({
            type: "UPDATE_ITEM",
            payload: { product: product, amount: amount },
        });
        dispatch({
            type: "REDUCE_QUANTITY",
            payload: { p: product, amount: amount },
        });
        alert("Cập nhật thành công!");
    };

    useEffect(() => {
        if (cart.length === 0) {
            localStorage.setItem("cart", JSON.stringify([]));
        } else {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart]);

    const [amount, setAmount] = useState<number | null>(null);
    useEffect(() => {
        setAmount(null);
    }, [item]);

    return (
        <tr key={item.id}>
            <td>{index}</td>
            <td>{item.name}</td>
            <td>{item.price} USD</td>
            <td>
                <input
                    type="number"
                    value={amount === null ? item.quantity : amount < 1 ? 1 : amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                />
            </td>
            <td>
                <button className="btn-update" onClick={() => handleUpdate(item)}>
                    Update
                </button>
                <button
                    className="btn-delete"
                    onClick={() => handleDelete(item.id, item.quantity)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};