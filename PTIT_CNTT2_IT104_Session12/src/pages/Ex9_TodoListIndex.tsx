import "mdb-ui-kit/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


import {Search} from "../components/Search.tsx";
import {Nav} from "../components/Nav.tsx";
import {Task} from "../components/Task.tsx";

export const Ex9_TodoListIndex=()=>{
    return(
        <>
            {/*<section className="vh-100 gradient-custom">*/}
            {/*    <div className="container py-5 h-100">*/}
            {/*        <div className="row d-flex justify-content-center align-items-center h-100">*/}
                        <div className="col col-xl-10">
                            <div className="card">
                                <div className="card-body p-5">
                                    <Search/>
                                    <Nav/>
                                    <Task/>
                                </div>
                            </div>
                        </div>
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </>

    )
}