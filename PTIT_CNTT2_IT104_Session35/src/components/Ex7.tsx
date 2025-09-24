import { HeartOutlined, HeartFilled } from "@ant-design/icons"
import { useAppDispatch, useAppSelector } from "../hooks/Hook"
import { toggleFavorite } from "../slices/favoriteSlice.tsx"

export const Ex7 = () => {
    const dispatch = useAppDispatch()
    const favoriteList = useAppSelector((state) => state.Favorite)

    return (
        <div style={{border: "1px solid #ccc", padding: "10px", width: "250px", fontFamily: "Arial, sans-serif", marginTop: "30px",}}>
            <h4>List Favorites User</h4>
            {favoriteList.map((u) => (
                <div key={u.id} style={{ marginBottom: "10px" }}>
                    <div>
                        <b>UserName:</b> {u.name}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <span>Favorites:</span>
                        {u.favorited ?
                            (
                                <HeartFilled style={{ color: "red" }} onClick={() => dispatch(toggleFavorite(u.id))}/>
                            ) :
                            (
                                <HeartOutlined onClick={() => dispatch(toggleFavorite(u.id))}/>
                            )}
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    )
}
