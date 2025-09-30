import { Card } from "antd";
import {type Product} from "../App.tsx"

const { Meta } = Card;

interface CardItemProps {
    product: Product;
    onDelete: () => void;
}

const CardItem = ({ product, onDelete }: CardItemProps) => {
    const { image, title, price, description } = product;

    return (
        <Card
            className="w-[300px] rounded-xl shadow-md overflow-hidden"
            cover={
                <img src={image} alt={title} className="w-full h-[220px] object-cover" />
            }
            actions={[
                <span key="delete" onClick={onDelete} className="cursor-pointer font-medium text-red-500 hover:text-red-700">
                      Xóa
                </span>,
            ]}
        >
            <Meta title={`${title} - ${price} đ`} description={description} />
        </Card>
    );
};

export default CardItem;