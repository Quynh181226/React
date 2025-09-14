import Nav from "./Header.tsx"

export const About=()=>{
    return (
        <div className="flex flex-col items-center gap-3 text-[#6D6360]">
            <Nav/>
            <p className="text-zinc-900 font-bold text-xl mt-5">Giới thiệu bản thân</p>
            <p>Hi! Tôi là <span className="text-[#0085FE] font-bold">NVA</span>, 1 người yêu thích toán học</p>
            <p><span className="font-bold">Sở thích: </span>Bla bla</p>
            <p><span className="font-bold">Muc tiêu: </span>...</p>
        </div>
    )
}