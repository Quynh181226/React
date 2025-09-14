import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <div  className="w-full flex bg-blue-600 justify-around font-bold px-3 py-2">
            <NavLink to={"/Home"} className="text-white">
                Home
            </NavLink>
            <NavLink to={"/About"} className="text-white">
                About
            </NavLink>
            <NavLink to={"/Contact"} className="text-white">
                Contact
            </NavLink>
        </div>
    )
}

export default Header
