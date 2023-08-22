
import App from "../App";
import { lazy } from "react";
const Home = lazy(() => import ("../pages/Home"));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
    path : "/",
    element : <App/>
   },
   {
    path : "/home",
    element : <Home/>
   },
   {
    path : "/about",
    element : <About/>
   },
   {
    path : "/contact",
    element : <Contact/>
   },
])

export default router