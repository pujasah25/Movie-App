import "./app.scss";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

const App = () => {
  const { user } = useContext(AuthContext);
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        { index: true, element: user ? <Home /> : <Navigate to="/register" /> },
        { path: "/register", element: !user ? <Register /> : <Navigate to="/" />,},
        { path: "/login", element: !user ? <Login /> : <Navigate to="/" /> },
        { path: "/movies", element: user && <Home type="movie" /> },
        { path: "/series", element: user && <Home type="series" /> },
        { path: "/watch", element: user && <Watch /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;

