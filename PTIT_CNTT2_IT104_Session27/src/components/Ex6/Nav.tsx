import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <nav className="flex gap-4">
            <NavLink to="/" end className={({ isActive }) => isActive ? "text-white font-bold p-1.5 bg-pink-700" : "text-gray-800  p-1.5"}>
                Home
            </NavLink>

            <NavLink to="/product" className={({ isActive }) => isActive ? "text-white font-bold p-1.5 bg-pink-700" : "text-gray-800  p-1.5"}>
                Product
            </NavLink>

            <NavLink to="/detail" className={({ isActive }) => isActive ? "text-white font-bold p-1.5 bg-pink-700" : "text-gray-800  p-1.5"}>
                Detail
            </NavLink>
        </nav>
    )
}

export default Header
