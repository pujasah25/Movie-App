import "./App.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewUser from "./pages/newUser/NewUser";
import NewProduct from "./pages/newProduct/NewProduct";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Login from "./pages/login/Login";
import AllLists from "./pages/allLists/AllLists";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";
import { AuthContext } from "./context/authContext/AuthContext";
import { useContext } from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Navigate
} from "react-router-dom";

const App = () => {
  const { user } = useContext(AuthContext);
  //console.log(user);

  const Layout = () => {
    return (
      <>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Outlet />
        </div>
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/login",
      element: user ? <Navigate to="/" /> :<Login />,
    },
    {
      path: "/",
      element: user && (<Layout />),
      children: [
        { index: true, element: <Home /> },
        { path: "/users", element: <UserList /> },
        { path: "/user/:userId", element: <User /> },
        { path: "/newUser", element: <NewUser /> },
        { path: "/movies", element: <ProductList /> },
        { path: "/movie/:movieId", element: <Product /> },
        { path: "/newMovie", element: <NewProduct /> },
        { path: "/lists", element: <AllLists /> },
        { path: "/list/:listId", element: <List /> },
        { path: "/newList", element: <NewList  /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

