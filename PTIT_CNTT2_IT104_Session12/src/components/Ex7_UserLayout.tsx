import "../style/UserLayout.scss";
import Header from "./Header";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Article from "./Article";
import Main1 from "./Main1.tsx";

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
