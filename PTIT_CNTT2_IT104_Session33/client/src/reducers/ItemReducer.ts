//Kieu du lieu cho sp
//Danh sach sp begin
//Action for cart
//Create reducer qly stock sp
//-> khi them vao gio -1
//-> khi xoa khoi gio return stock
//-> khi update stock (+) => stock mới = stock - (newAmount - oldAmount)###"chenh lech"
// => Neu gio tang → stock giam
// => Neu gio giam → stock tang

export type ItemType = {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    imageUrl: string;
    initialQuantity?: number;
};

type ActionType =
    | { type: "ADD_CART"; payload: ItemType }
    | { type: "REMOVE_CART"; payload: { id: number; quantity: number } }
    | { type: "UPDATE_CART"; payload: { id: number; oldAmount: number; newAmount: number } };

const ItemReducer = (state: ItemType[] = [], action: ActionType): ItemType[] => {
    switch (action.type) {
        case "ADD_CART":
            return state.map((p) => (p.id === action.payload.id ? { ...p, quantity: p.quantity - 1 } : p));
        case "REMOVE_CART":
            return state.map((p) => (p.id === action.payload.id ? { ...p, quantity: p.quantity + action.payload.quantity } : p));
        case "UPDATE_CART":
            return state.map((p) =>
                p.id === action.payload.id ? { ...p, quantity: p.quantity - (action.payload.newAmount - action.payload.oldAmount) } : p
            );
        default:
            return state;
    }
};

export default ItemReducer;