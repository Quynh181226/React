import { useAppDispatch, useAppSelector } from "../hooks/Hook"
import { random, resetList } from "../slices/Ex2"

export const Ex2 = () => {
    const list = useAppSelector((state) => state.RandomList)
    const dispatch = useAppDispatch()

    return (
        <div>
            <h3>List random: {JSON.stringify(list)}</h3>
            <button onClick={() => dispatch(random())}>Random</button>
            <button onClick={() => dispatch(resetList())}>Reset</button>
        </div>
    )
}
