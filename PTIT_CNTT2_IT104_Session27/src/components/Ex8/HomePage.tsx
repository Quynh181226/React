import {useLocation} from "react-router-dom";

export const HomePage = () => {
    const Location = useLocation()
    const {email} = Location.state || ""

    return(
        <div>
            <h1>Home Page</h1>
            <h1>Email: {email}</h1>
        </div>
    )
}
