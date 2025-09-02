import { useRef } from "react";

export const Ex7=()=> {
    const sectionRef = useRef<HTMLDivElement>(null)

    const handleScroll = () => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    const styles={
        Scroll1: {
            background: "#0094ff",
            padding: "48px 0 32px 0",
            textAlign: "center",
            borderRadius: 16,
            margin: "32px auto 0 auto",
            maxWidth: 500
        },
        Scroll2: {
            color: "#fff",
            fontWeight: 700,
            fontSize: 40,
            marginBottom: 28,
        },
        Role: {
            marginRight: 10,
            fontSize: 36
        },
        ScrollBtn: {
            fontSize: 17,
            fontWeight: 600,
            padding: "10px 28px",
            borderRadius: 8,
            border: "1.5px solid #0094ff",
            background: "#fff",
            color: "#0094ff",
            boxShadow: "0 2px 8px #0001",
            cursor: "pointer",
            transition: ".2s",
        },
        ScrollText: {
            maxWidth: 600,
            margin: "48px auto 0 auto",
            background: "#f4f4f4",
            borderRadius: 12,
            padding: "36px 32px",
            color: "#555",
            fontSize: 18,
            minHeight: 200,
            lineHeight: 1.7,
        },
        ScrollGoal:{
            maxWidth: 600,
            margin: "80px auto 0 auto",
            background: "#fff",
            borderRadius: 16,
            padding: "48px 32px",
            textAlign: "center",
            boxShadow: "0 2px 16px #0002",
            fontSize: 22,
            color: "#2b3a5b",
            fontWeight: 600,
        }
    }
    return (
        <div style={{ minHeight: "120vh", background: "#f5f5f9" }}>
            <div style={styles.Scroll1}>
                <h1 style={styles.Scroll2}>
                    <span role="img" aria-label="compass" style={styles.Role}>🧭</span>
                Cuộn tới nội dung
                </h1>
            <button onClick={handleScroll} style={styles.ScrollBtn}>
            Đi tới phần nội dung
            </button>
            </div>

            <div style={styles.ScrollText}>
            Đây là nội dung giả lập để tạo khoảng cách cho trang… <br />
            <br />
            Bạn có thể thêm nhiều đoạn như thế này để tăng chiều dài.
            <br />
            <br />
            Cuộn trang sẽ mượt mà hơn khi có nhiều nội dung.
            </div>

            <div ref={sectionRef} style={styles.ScrollGoal}>
                👉 Đây là PHẦN NỘI DUNG mục tiêu!
            <br />
                Bạn đã cuộn tới đây thành công 🎉
            </div>
        </div>
)
}