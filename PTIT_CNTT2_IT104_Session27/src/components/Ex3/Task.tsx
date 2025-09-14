import {TaskList} from "./TaskList.tsx";

export const Task=()=> {
    return (
        <div className="min-h-screen bg-[#F9F9F9]">
            <div className="flex flex-col gap-3 mt-3">
                <TaskList />
            </div>
        </div>
    )
}