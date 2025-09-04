export const Ex5=()=>{
    return(
        <div className="relative w-[250px] h-[180px] border-[#D7F2FE] border-20 rounded-[8px]">
         <div className="relative bg-[#b7e8fd] p-6 w-[210px] h-[140px] rounded-md">
             <p className="text-[#0377b1] font-medium">relative</p>
             <div className="absolute bottom-0 left-0  text-white bg-[#0ea5e9] rounded-[8px] px-5 py-3 w-[139px] h-[50px] hover:bg-[#0369a1]">
                 absolute child
             </div>
         </div>
        </div>
    )
}