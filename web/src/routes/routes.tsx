import { createBrowserRouter } from "react-router-dom";
import Home from "../client/screens/home";  
import Login from "../client/screens/login";
import Register from "../client/screens/register";   
import Footer from "../client/components/footer";
import CursosPage from "../client/screens/cursosPage";
import SettingsPage from "../client/screens/settingsPage";
import AdminPanel from "../client/screens/adminPanel";

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
  {
    path: "/cursosPage",
    element: (
      <div>
        <CursosPage/> 
        <Footer /> 
      </div>
    ), 
  },
  {
    path: "/settingsPage",
    element: (
      <div>
        <SettingsPage/> 
        <Footer />
      </div>
    ), 
  },
  {
    path: "/adminPanel",
    element: (
      <div>
        <AdminPanel/> 
        <Footer />
      </div>
    ), 
  },
  // Outras rotas podem ser adicionadas aqui
]);
