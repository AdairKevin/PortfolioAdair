import { Navigate, RouteObject } from "react-router-dom"; // Solo en TypeScript
import Home from "../pages/home/home";
import Proyectos from "../pages/proyectos/proyectos";
import About from "../pages/about/about";
import Desing from "../pages/desing/desing";
import Forfun from "../pages/forfun/forfun";

// Define las rutas
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/proyectos",
    element: <Proyectos />,
  },
  {
    path: "/desing",
    element: <Desing />,
  },
  {
    path: "/forfun",
    element: <Forfun />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
];

export default routes;
