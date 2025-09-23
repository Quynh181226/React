import axios from "axios";
import type { ItemType } from "./ItemReducer";

type ActionType =
    | { type: "CART_RECEIVE"; payload: ItemType }
    | { type: "DELETE_ITEM"; payload: number }
    | { type: "UPDATE_ITEM"; payload: { product: ItemType; amount: number } };

const API_URL = "http://localhost:8080/cart";

const cartReducer = (state: ItemType[] = [], action: ActionType): ItemType[] => {
    switch (action.type) {
        case "CART_RECEIVE": {
            const exist = state.find((p) => p.id === action.payload.id);

            if (exist) {
                const updated = { ...exist, quantity: exist.quantity + 1 };
                axios.put(`${API_URL}/${exist.id}`, updated);
                return state.map((p) => (p.id === exist.id ? updated : p));
            } else {
                const newItem = { ...action.payload, quantity: 1 };
                axios.post(API_URL, newItem);
                return [...state, newItem];
            }
        }

        case "DELETE_ITEM": {
            axios.delete(`${API_URL}/${action.payload}`);
            return state.filter((p) => p.id !== action.payload);
        }

        case "UPDATE_ITEM": {
            const updated = {
                ...action.payload.product,
                quantity: action.payload.amount,
            };
            axios.put(`${API_URL}/${updated.id}`, updated);
            return state.map((p) =>
                p.id === updated.id ? { ...p, quantity: updated.quantity } : p
            );
        }

        default:
            return state;
    }
};

export default cartReducer;