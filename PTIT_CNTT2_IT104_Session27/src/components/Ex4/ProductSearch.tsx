import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function ProductSearch() {
    const navigate = useNavigate()
    const [string, setStr] = useState("")
    const handleSubmit = () => {
        navigate(`/product?search=${string}`)
    }

    return (
        <div className="w-[500px] mx-auto mt-5 flex">
            <input type="text" value={string} onChange={(e)=> setStr(e.target.value)} placeholder="Search" className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700">
                Search
            </button>
        </div>
    )
}
