import Nav from "./Header.tsx"

export const Contact=()=>{
    return (
        <div className="font-bold text-[#626770]">
            <Nav/>
           <div className="flex flex-col items-center gap-3 mt-10">
               <p className= "text-[#462F1F] text-xl">Thông tin liên hệ</p>
               <p>Email: <span className="text-[#0085FE]">nguyenvana@gmail.com</span></p>
               <p>Số điện thoại: <span className="font-normal"> 0123 456 789</span></p>
               <p>LinkedIn: <span className="text-[#0085FE]">linkedin.com/in/nguyenvana</span></p>
           </div>
        </div>
    )
}