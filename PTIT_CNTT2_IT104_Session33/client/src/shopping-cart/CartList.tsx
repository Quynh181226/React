import "../index.css";
import type { RootType } from "../store/Store";
import { useSelector } from "react-redux";
import { TableHead } from "./TableHead";
import { TableRow } from "./TableRow";
import { CartFooter } from "./CartFooter.tsx";
import type { ItemType } from "../reducers/ItemReducer.ts";

export const CartList = () => {
    const {cart} = useSelector((state: RootType) => state);

    return (
        <div className="cart-box">
            <div className="cart-header">Your Cart</div>
            <div className="table-wrapper">
                <table>
                    <TableHead/>
                    <tbody>
                    {cart.length === 0 ? (
                        <tr>
                            <td colSpan={5}>Chưa có sản phẩm nào trong giỏ</td>
                        </tr>
                    ) : (
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