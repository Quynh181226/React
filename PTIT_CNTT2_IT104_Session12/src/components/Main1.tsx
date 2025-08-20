import Cart from "./Cart"

export default function Main() {
    const items = []
    for (let i = 0; i < 12; i++) {
        items.push(i)
    }

    return (
        <main className="main">
            {items.map((i) => (
                <Cart key={i} />
            ))}
        </main>
    )
}
