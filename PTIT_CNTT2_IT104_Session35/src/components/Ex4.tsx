import { useAppDispatch, useAppSelector } from "../hooks/Hook.tsx"
import { toggleGrid } from "../slices/Ex4"

export const Ex4 = () => {
    const grid = useAppSelector((state) => state.Grid)
    const dispatch = useAppDispatch()

    return (
        <div style={{ width: "30%" }}>
            <button onClick={() => dispatch(toggleGrid())}>
                {grid} mode
            </button>
            <div className="gridContainer" style={{ flexDirection: grid === "List" ? "column" : "row" }}>
                <span className="col">1</span>
                <span className="col">2</span>
                <span className="col">3</span>
                <span className="col">4</span>
            </div>
        </div>
    )
}
