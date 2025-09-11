import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { About } from "./components/About"
import { Home } from "./components/Home"
import { Contact } from "./components/Contact"
// import {Header} from "./components/Header.tsx";
// import {Product} from "./components/Product.tsx";
// import {Details} from "./components/Detail.tsx";
// import {ListUser} from "./components/ListUser.tsx";
// import {UserDetails} from "./components/UserDetail.tsx";
// import {CustomLink} from "./components/CustomLink.tsx";
// import {Login} from "./components/Login.tsx";
// import {Homepage} from "./components/HomePage.tsx";
// import {Register} from "./components/Register.tsx";
// import {NotFound} from "./components/NotFound.tsx";
// import {Home2} from "./components/Home2.tsx";

function App() {
  return (
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/*<Route path="/" element={<Header />}>*/}
            {/*    <Route index element={<Home2 />} />*/}
            {/*    <Route path="/Product" element={<Product />} />*/}
            {/*    <Route path="/Details" element={<Details />} />*/}
            {/*</Route>*/}
            {/*<Route path="/ListUser" element={<ListUser />} />*/}
            {/*<Route path="/user-details/:id" element={<UserDetails />} />*/}
            {/*<Route path="/custom" element={<CustomLink />} />*/}
            {/*<Route path="/contact" element={<Contact />} />*/}
            {/*<Route path="/about" element={<About />} />*/}
            {/*<Route path="/login" element={<Login />} />*/}
            {/*<Route path="/register" element={<Register />} />*/}
            {/*<Route path="/home-page" element={<Homepage />} />*/}
            {/*<Route path="*" element={<NotFound />} />*/}
        </Routes>
      </BrowserRouter>
  )
}

export default App
