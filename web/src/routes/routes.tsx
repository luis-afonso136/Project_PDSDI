import { createBrowserRouter } from "react-router-dom";
import Home from "../client/screens/home";
import Login from "../client/screens/login";
import Register from "../client/screens/register";
import Footer from "../client/components/footer";
import CursosPage from "../client/screens/cursosPage";
import SettingsPage from "../client/screens/settingsPage";
import AdminPanel from "../client/screens/adminPanel";
import ProfilePage from "../client/screens/profilePage";
import { PrivateRoutes } from "./privateRoutes"; // Importando o componente
import Curso from "../client/screens/curso";
import Perguntas from "../client/screens/perguntas";

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
      <PrivateRoutes
        element={
          <div>
            <CursosPage />
            <Footer />
          </div>
        }
        notHaveAccessNavigateTo="/login"
      />
    ),
  },
  {
    path: "/settingsPage",
    element: (
      <PrivateRoutes
        element={
          <div>
            <SettingsPage />
            <Footer />
          </div>
        }
        notHaveAccessNavigateTo="/login"
      />
    ),
  },
  {
    path: "/adminPanel",
    element: (
      <PrivateRoutes
        element={
          <div>
            <AdminPanel />
            <Footer />
          </div>
        }
        notHaveAccessNavigateTo="/login"
      />
    ),
  },
  {
    path: "/profilePage",
    element: (
      <PrivateRoutes
        element={
          <div>
            <ProfilePage />
            <Footer />
          </div>
        }
        notHaveAccessNavigateTo="/login"
      />
    ),
  },
  {
    path: "/curso/:id",
    element: (
      <PrivateRoutes
        element={
          <div>
            <Curso />
            <Footer />
          </div>
        }
        notHaveAccessNavigateTo="/login"
      />
    ),
  },
  {
    path: "/perguntas/:id",
    element: (
      <PrivateRoutes
        element={
          <div>
            <Perguntas />
          </div>
        }
        notHaveAccessNavigateTo="/login"
      />
    ),
  },
]);
