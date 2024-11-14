import { createBrowserRouter } from "react-router-dom";
import Home from "../client/screens/home";  
import Login from "../client/screens/login";
import Register from "../client/screens/register";   
import Footer from "../client/components/footer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Home /> 
        <Footer /> 
      </div>
    ),
  },
  {
    path: "/login",
    element: <Login />, 
  },
  {
    path: "/register",
    element: <Register />, 
  },
  // Outras rotas podem ser adicionadas aqui
]);
