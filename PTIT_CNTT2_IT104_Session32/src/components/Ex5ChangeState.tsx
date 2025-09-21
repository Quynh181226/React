import { useDispatch, useSelector } from 'react-redux'
import type { RootType } from '../store/Store.ts'
export const Ex5ChangeState = () => {
    const {changeState} = useSelector((state: RootType)=>state)
    const dispatch = useDispatch()
    const handleChange = ()=>{
        dispatch({type: "CHANGE"})
    }
    return (
        <div>
            <h3>{changeState}</h3>
            <button onClick={handleChange}>Change State</button>
        </div>
    )
}