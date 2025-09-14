import {products} from "./DataProduct.tsx";
import {Link} from "react-router-dom"
export const ProductList = () => {
    return (
        <div className="flex flex-row gap-4 ml-1 mr-20">
            {products.map((product) => (
                // <div >
                <div key={product.id} className=" border rounded-sm border-gray-300 w-1/3 p-3 mb-4">
                    <h4 className="font-bold">{product.name}</h4>
                    <p>{product.price}</p>
                    <Link to={`/product/${product.id}`} className="text-blue-600">Xem chi tiết</Link>
                </div>
                // </div>
            ))}
        </div>
    )
}