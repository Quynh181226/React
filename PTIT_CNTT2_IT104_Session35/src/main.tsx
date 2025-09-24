import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
import { Store } from "./store/Store.tsx";
import App from "./App.tsx";
import {Provider} from "react-redux";
import {StrictMode} from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={Store}>
            {/*<BrowserRouter>*/}
                <App/>
            {/*</BrowserRouter>*/}
        </Provider>
    </StrictMode>
);