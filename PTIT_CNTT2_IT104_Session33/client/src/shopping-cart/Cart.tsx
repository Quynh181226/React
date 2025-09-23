import { Notification } from './Notification';
import { ItemList } from "./ItemList.tsx";
import { CartList } from "./CartList.tsx";

export const Cart = () => {
    return (
        <div style={{ width: "80%" }}>
            <h2>Shopping cart</h2>
            <hr />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <ItemList />
                <CartList />
                <Notification />
            </div>
        </div>
    );
};