import {useNavigate, useParams} from "react-router-dom";
import {tasks} from "./DataTask.tsx";
// import {ProductList} from "./ProductList.tsx";

export const TaskDetail=()=>{
    const navi=useNavigate()
    const {id}=useParams()
    const findItem=tasks.find(item=>item.id === Number(id))
    if(!findItem) return <p className="font-bold text-pink-600">Sản phẩm không tồn tại.</p>

    return (
        <div  className="flex flex-col items-center mt-3 ml-1">
            <div className="flex flex-col gap-1">
                <h4 className="font-bold text-lg">{findItem.title}</h4>
                <p>Mô tả: {findItem.description}</p>
                <button onClick={()=> navi(-1)} className="bg-[#2B7FFF] rounded-md text-white w-fit p-2">Quay lại</button>
            </div>
        </div>
    )

}