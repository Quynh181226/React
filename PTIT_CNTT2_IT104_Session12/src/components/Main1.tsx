import Cart from "./Cart";

export default function Main() {
    return (
        <main className="main">
            {Array.from({ length: 12 }).map((_, i) => (
                <Cart key={i} />
            ))}
        </main>
    );
}
