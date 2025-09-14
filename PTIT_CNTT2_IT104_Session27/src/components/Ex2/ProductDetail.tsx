import {Link, useParams} from "react-router-dom";
import {products} from "./DataProduct";
// import {ProductList} from "./ProductList.tsx";

export const ProductDetail=()=>{
    const {id}=useParams()
    // TS2367: This comparison appears to be unintentional because the types 'number' and 'string | undefined' have no overlap.
    const findItem=products.find(item=>item.id === Number(id))
    if(!findItem) return <p className="font-bold text-pink-600">Sản phẩm không tồn tại.</p>

    return (
        <>
            <div className="min-h-screen bg-[#F9F9F9]">
                <div className="flex flex-col gap-3 text-white text-center bg-blue-600 pb-2 pt-2">
                    <p className="text-3xl font-bold">Trang chi tiết sản phẩm</p>
                    <p className="text-sm">Danh sách sản phẩm</p>
                </div>
                <div className="flex flex-col gap-3 mt-3 ml-1">
                    <h4 className="font-bold text-lg">Chi tiết sản phẩm</h4>
                    <h5 className="font-bold">{findItem.name}</h5>
                    <p>Giá: {findItem.price}</p>
                    <p>Mô tả: {findItem.description}</p>
                    <Link to={"/product"} className="text-blue-600">Quay lại danh sách sản phẩm</Link>
                </div>
            </div>

        </>
    )

}