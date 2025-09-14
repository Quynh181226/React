import {PostList} from "./PostList";

export const Post=()=> {
    return (
        <div className="min-w-[125%] min-h-screen bg-[#F9F9F9]">
            <div className="flex flex-col gap-3">
                <PostList />
            </div>
        </div>
    )
}