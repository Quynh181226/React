import { useState } from "react"
import "../index.css"

type Person = {
    stt: number
    job: string
    name?: string
    status: boolean
    date: string
}

export const Ex8_TodoList = () => {
    const getDate = (): string => {
        const date = new Date()
        const day = String(date.getDate()).padStart(2, "0")
        const month = String(date.getMonth() + 1).padStart(2, "0")
        const year = date.getFullYear()
        const hours = String(date.getHours()).padStart(2, "0")
        const minutes = String(date.getMinutes()).padStart(2, "0")
        const seconds = String(date.getSeconds()).padStart(2, "0")
        return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
    }

    const [user] = useState<Person[]>([
        {
            stt: 1,
            job: "Design",
            name: "Tèo",
            status: false,
            date: getDate(),
        },
        {
            stt: 2,
            job: "Dental checkup",
            name: "Teo",
            status: true,
            date: getDate(),
        },
    ])

    return (
        <div className="containerTable">
            <table>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>CÔNG VIỆC</th>
                    <th>TÊN THÀNH VIÊN</th>
                    <th>TRẠNG THÁI</th>
                    <th>THỜI GIAN</th>
                    <th>CHỨC NĂNG</th>
                </tr>
                </thead>
                <tbody>
                {user.map((el) => (
                    <tr key={el.stt}>
                        <td>{el.stt}</td>
                        <td>{el.job}</td>
                        <td>{el.name}</td>
                        <td>
                <span className={el.status ? "yes" : "no"}>
                  {el.status ? "Hoàn Thành" : "Chưa Hoàn Thành"}
                </span>
                        </td>
                        <td>{el.date}</td>
                        <td>
                            <button className="edit">Edit</button>
                            {" "}
                            <button className="dele">Del</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
