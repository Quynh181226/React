import type { Post } from "../type/Post.ts"
import { Button, Card, Select } from "antd"
import React from "react"

interface HeaderProps {
    posts: Post[]
    filter: "all" | "favorite"
    setFilter: (f: "all" | "favorite") => void
    onCreate: () => void
}

export const Header = ({ posts, filter, setFilter, onCreate }: HeaderProps) => {
    const favorites = posts.filter(p => p.favorite).length

    const styles: Record<string, React.CSSProperties> = {
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            marginBottom: 24,
        },
        row: {
            display: "flex",
            gap: 16,
        },
        columm: {
            display: "flex",
            flexDirection:  "column",
            alignItems: "center",
            gap: 16,
            background: "rgba(131,126,211,0.25)",
            padding: 22,
            borderRadius: 5

        },
        cardNum: {
            textAlign: "center",
            minWidth: 120,
        },
        number: {
            fontSize: 20,
            fontWeight: "bold",
        },
        label: {
            fontSize: 14,
            color: "#555",
        },
    }

    return (
        <div style={styles.container}>
            <div style={styles.row}>
                <Card style={styles.cardNum}>
                    <div style={styles.number}>{posts.length}</div>
                    <div style={styles.label}>Bài viết</div>
                </Card>
                <Card style={styles.cardNum}>
                    <div style={styles.number}>{favorites}</div>
                    <div style={styles.label}>Lượt thích</div>
                </Card>
            </div>

            <div style={styles.columm}>
                <div><label>Lọc theo: </label>
                    <Select
                    value={filter}
                    onChange={setFilter}
                    style={{ minWidth: 140 }}
                    suffixIcon={<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#B87E9F"><path d="M480-360 280-560h400L480-360Z"/></svg>}
                    options={[
                        { value: "all", label: "Tất cả bài viết" },
                        { value: "favorite", label: "Bài viết yêu thích" },
                    ]}
                /></div>
               <div> <Button type="primary" style={{ background: "orange" }} onClick={onCreate}>
                   Tạo bài viết
               </Button></div>
            </div>
        </div>
    )
}
