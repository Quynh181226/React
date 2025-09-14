import {ProductList} from "./ProductList.tsx";

export const Product=()=> {
    return (
        <div className="min-h-screen bg-[#F9F9F9]">
            <div className="flex flex-col gap-3 text-white text-center bg-[#007BFF] pb-2 pt-2">
                <p className="text-3xl font-bold">Trang chi tiết sản phẩm</p>
                <p className="text-sm">Danh sách sản phẩm</p>
            </div>
           <div className="flex flex-col gap-3 mt-3">
               <p className="font-bold">List Full</p>
               <ProductList />
           </div>
        </div>
    )
}