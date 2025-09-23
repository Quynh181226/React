import { useDispatch, useSelector } from "react-redux";
import type { RootType } from "../store/Store.ts";

export const Ex6Theme = () => {
    const dispatch = useDispatch();
    const { theme } = useSelector((state: RootType) => state);

    return (
        <div style={theme === "light"
                    ? {color: "black", backgroundColor: "white", width: "15%", height: "100px",}
                    : {color: "white", backgroundColor: "black", width: "15%", height: "100px",}
                   }
        >
            <input type="checkbox" onChange={() => dispatch({ type: "CHANGE_THEME" })}/>
            <label>{theme}</label>
        </div>
    );
};
