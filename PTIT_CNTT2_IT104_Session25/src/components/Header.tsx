import { NavLink, Outlet } from "react-router-dom";
export const Header = () => {
    return (
        <div>
            <nav style={{ display: "flex", gap: "15px" }}>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/Product"}>Product</NavLink>
                <NavLink to={"/Details"}>Detail</NavLink>
            </nav>
            <Outlet />
        </div>
    );
};