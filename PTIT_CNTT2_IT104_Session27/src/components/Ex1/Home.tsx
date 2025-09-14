import Nav from "./Header.tsx"

export const Home=()=>{
    return (
        <div className="flex flex-col items-center gap-3 ">
            <Nav/>
            <p className="text-xl font-bold">Chào mừng bạn đến với ứng dụng giới thiệu bản thân của tôi!</p>
            <p className="text-[#6D6360]">Đây là ứng dụng ...</p>
        </div>
    )
}