import { useAppDispatch, useAppSelector } from "../hooks/Hook.tsx";
import { decrease, increase, reset } from "../slices/Ex1";

export const Ex1 = () => {
    const {value} = useAppSelector((state )=> state.Count)
    const dispatch = useAppDispatch()
    return (
        <div>
            <h3>Count: {value}</h3>
            <div style={{display:"flex", flexDirection:"row"}}>
                <button onClick={()=>dispatch(increase())}>Increase</button>
                <button onClick={()=>dispatch(decrease())}>Decrease</button>
                <button onClick={()=>dispatch(reset())}>Reset</button>
            </div>
        </div>
    );
};
