import "../style/UserLayout.scss";
import Header from "../components/Header.tsx";
import Navbar from "../components/Navbar.tsx";
import Menu from "../components/Menu.tsx";
import Article from "../components/Article.tsx";
import Main1 from "../components/Main1.tsx";

export default function UserLayout() {
    return (
        <div className="user-layout">
            <Header />
            <Navbar />
            <div className="content">
                <Menu />
                <Main1 />
                <Article />
            </div>
        </div>
    );
}
