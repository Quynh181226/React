
import {useSelector} from "react-redux";
import type {RootType} from "../store/Store.ts";

export const CartFooter = () => {
    const { cart } = useSelector((state: RootType) => state);

    return (
        <div className="cart-footer">
            There are <strong>{cart.length}</strong> items in your shopping cart.
            <span className="total-price">
        {cart.reduce((acc: number, curr: { price: number; quantity: number; }) => acc + curr.price * curr.quantity, 0)} USD
      </span>
        </div>
    );
};
