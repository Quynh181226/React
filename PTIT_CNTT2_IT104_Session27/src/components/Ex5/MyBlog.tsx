import {SilbarContent} from "./SilbarContent.tsx"
import {Outlet} from "react-router-dom";

export const MyBlog = () => {
    return (
        <div className="flex">
            <SilbarContent />
            <div className="flex w-[85%]">
                <Outlet />
            </div>
        </div>
    )
}