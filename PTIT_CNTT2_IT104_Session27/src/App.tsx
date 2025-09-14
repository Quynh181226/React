import {Navigate, Route, Routes} from "react-router-dom";
// import {Home} from "./components/Ex7/Home.tsx";
// import {About} from "./components/Ex7/About.tsx";
// import {NotFound} from "./components/Ex7/NotFound.tsx";
import {Login} from "./components/Ex8/Login.tsx";
import {Register} from "./components/Ex8/Register.tsx";
// import {Post} from "./components/Ex5/Post.tsx";
// import {PostList} from "./components/Ex5/PostList.tsx";
// import {PostDetail} from "./components/Ex5/PostDetail.tsx";
// import {MyBlog} from "./components/Ex5/MyBlog.tsx";
// import {Home} from "./components/Ex6/Home.tsx";
// import {Product} from "./components/Ex6/Product.tsx";
// import {Detail} from "./components/Ex6/Detail.tsx";
// import {Home} from "./components/Ex1/Home.tsx";
// import {Contact} from "./components/Ex1/Contact.tsx";
// import {About} from "./components/Ex1/About.tsx";
// import {Product} from "./components/Ex2/Product.tsx";
// import {ProductDetail} from "./components/Ex2/ProductDetail.tsx";
// import type {IDataTask} from "./components/Ex3/DataTask.tsx";
// import {Task} from "./components/Ex3/Task.tsx";
// import {TaskDetail} from "./components/Ex3/TaskDetail.tsx";
// import type {Product} from "./components/Ex4/DataSearch.tsx";
// import ProductSearch from "./components/Ex4/ProductSearch.tsx";


function App() {

  return (
    <>
      <Routes>
          {/*<Route path="/" element={<Home />} />*/}
          {/*<Route path="/Home" element={<Home />} />*/}
          {/*<Route path="/Contact" element={<Contact />} />*/}
          {/*<Route path="/About" element={<About />} />*/}

          {/*<Route path="/" element={<Navigate to="/product"/>}/>*/}
          {/*<Route path="/Product" element={<Product/>}/>*/}
          {/*<Route path="/Product/:id" element={<ProductDetail/>}/>*/}

          {/*<Route path="/" element={<Navigate to="/IDataTask"/>}/>*/}
          {/*<Route path="/IDataTask" element={<Task/>}/>*/}
          {/*<Route path="/IDataTask/:id" element={<TaskDetail/>}/>*/}

          {/*<Route path="/" element={<Navigate to="/Product"/>}/>*/}
          {/*<Route path={"/Product"} element={<ProductSearch/>}/>*/}

          {/*<Route path="/blog" element={<MyBlog />}>*/}
          {/*    <Route index element={<Post />} />*/}
          {/*    <Route path="posts" element={<PostList />} />*/}
          {/*    <Route path="posts/:id" element={<PostDetail />} />*/}
          {/*</Route>*/}

          {/*<Route path="/" element={<Home />} />*/}
          {/*<Route path="/product" element={<Product />} />*/}
          {/*<Route path="/detail" element={<Detail />} />*/}


          {/*<Route path="/" element={<Home />} />*/}
          {/*<Route path="/Home" element={<Home/>} />*/}
          {/*<Route path="/about" element={<About />} />*/}

          {/*<Route path="*" element={<NotFound />} />*/}




          <Route path="/" element={<Register />} />
          <Route path="/Login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>

      </Routes>
    </>
  )
}

export default App
