import type { RootType } from "../store/Store";
import { useSelector } from "react-redux";
import { TableHead } from "./TableHead";
import { TableRow } from "./TableRow";
import { CartFooter } from "./CartFooter.tsx";
import type { ItemType } from "../reducers/ItemReducer.ts";

export const CartList = () => {
    const { cart } = useSelector((state: RootType) => state);

    return (
        <div style={{ width: "48%", borderRadius: "6px", overflow: "hidden", fontFamily: "Arial, sans-serif" }}>
            <div style={{ background: "#f8d7da", color: "#721c24", fontWeight: "bold", padding: "8px 12px", borderBottom: "1px solid #e0e0e0" }}>
                Your Cart
            </div>
            <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <TableHead />
                    <tbody>
                    {cart.length === 0 ?
                    (
                        <tr>
                            <td colSpan={5}>Chưa có sản phẩm nào trong giỏ</td>
                        </tr>
                    ) :
                    (
                        cart.map((item: ItemType, index: number) => (
                            <TableRow index={index + 1} item={item} />
                        ))
                    )}
                    </tbody>
                </table>
            </div>
            <CartFooter />
        </div>
    );
};