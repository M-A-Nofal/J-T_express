import {createBrowserRouter, RouterProvider, Outlet, ScrollRestoration} from "react-router-dom";
import AppNavbar from "./components/AppNavbar"
import Footer from "./components/Footer"
import Home from "./pages/Home";
import Cart from './pages/Cart'
import SingleProduct from "./components/SingleProduct";
import Login from "./pages/Login";
import Products from "./components/Products";

const Layout = () => {
  return (
    <div>
      <AppNavbar />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  )
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/products",
        element: <Products />
      },
      {
        path: "/product/:title",
        element: <SingleProduct />,
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/login",
        element: <Login />
      }
    ]
  }
])

function App() {

  return (
    <div className=" font-bodyFont">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
