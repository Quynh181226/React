import { useAppDispatch, useAppSelector } from "../hooks/Hook.tsx"
import { changeLanguage } from "../slices/Ex6.tsx"

export const Ex6 = () => {
    const dispatch = useAppDispatch()
    const language = useAppSelector((state) => state.Language)

    return (
        <div>
            <select value={language.mode} onChange={(e) => dispatch(changeLanguage(e.target.value))}>
                <option value="viet">Vietnamese</option>
                <option value="eng">English</option>
            </select>

            <h3>
                {language.mode === "viet" ? language.viet : language.eng}
            </h3>
        </div>
    )
}
