import { Link, Outlet } from "react-router-dom"

export default function Teams() {
    return (
        <div>
            <h1>Teams Page</h1>
    <nav>
    <ul>
        <li><Link to="/teams">Teamindex</Link></li>
        <li><Link to="/teams/1">Team1</Link></li>
        <li><Link to="/teams/2">team2</Link></li>
    </ul>
    </nav>
    <Outlet />
    </div>
)
}
