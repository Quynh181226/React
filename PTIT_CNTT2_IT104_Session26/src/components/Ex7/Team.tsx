import { useParams } from "react-router-dom"

export const Team=()=> {
    const {teamId}=useParams();
    return (
        <div>Team:{teamId}</div>
    )
}