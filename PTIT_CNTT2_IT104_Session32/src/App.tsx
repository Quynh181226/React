import {Route, Routes} from "react-router-dom";
import Ex1Profile from "./components/Ex1Profile.tsx";
import {Ex2ListUser} from "./components/Ex2ListUser.tsx";
import {Ex3Counter} from "./components/Ex3Counter.tsx";
import {Ex4RandomNumber} from "./components/Ex4RandomNumber.tsx";
import {Ex5ChangeState} from "./components/Ex5ChangeState.tsx";
import {Ex6Theme} from "./components/Ex6Theme.tsx";
import { Ex7Register } from "./components/Ex7Register.tsx";
import { Ex7Login } from "./components/Ex7Login.tsx";

function App() {

  return (
    <>
        <Routes>
            <Route path="/Ex1" element={<Ex1Profile />} />

            <Route path="/Ex3" element={<Ex2ListUser />} />

            <Route path="/Ex4" element={<Ex3Counter />} />

            <Route path="/Ex5" element={<Ex4RandomNumber />} />

            <Route path="/Ex6" element={<Ex5ChangeState />} />

            <Route path="/Ex7" element={<Ex6Theme />} />

            <Route path="/Register" element={<Ex7Register />} />
            <Route path="/Login" element={<Ex7Login />} />

        </Routes>
    </>
  )
}

export default App
