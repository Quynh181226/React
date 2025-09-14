import {tasks} from "./DataTask.tsx";
import {Link} from "react-router-dom"
export const TaskList = () => {
    return (
        <div className="flex flex-col items-center gap-4">
            <p className="font-bold text-xl w-1/2">Danh sách công việc</p>
            {tasks.map((task) => (
                <div key={task.id} className="border rounded-sm border-[#5B5B5C] bg-[#F9FAFC] w-90 p-3 mb-4">
                    <h4 className="font-bold">{task.title}</h4>
                    <p>{task.description}</p>
                    <Link to={`/IDataTask/${task.id}`} className="text-blue-600">
                        Xem chi tiết
                    </Link>
                </div>
            ))}
        </div>
    )
}