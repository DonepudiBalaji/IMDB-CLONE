import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Container/Main";
import Layout from "./Container/Layout";
import Wishlist from "./Container/Wishlist";

const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout /> ,
    children : [
      {
        path:'/home',
        element: <Main />
      },
      {
        path:'/wishlist',
        element: <Wishlist />
      }
    ]
  }
])

function App() {
  return ( 
    <>
       <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
