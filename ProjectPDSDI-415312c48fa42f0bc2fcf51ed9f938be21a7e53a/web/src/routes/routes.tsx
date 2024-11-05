import { createBrowserRouter } from "react-router-dom";
import { App } from "../app/App.tsx";
import { Home } from "../client/screens/home.tsx";
import { ErrorPage } from "../client/screens/errorPage.tsx";
import { Register } from "../client/screens/register.tsx";
import { Login } from "../client/screens/login.tsx";
// import { PrivateRoutes } from "./privateRoutes.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // Pagina de erro
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        // element: (
        //   <PrivateRoutes
        //     element={<LandingPage />}
        //     notHaveAccessNavigateTo="/sign-up"
        //   />
        // ),
        children: [
          {
            path: "properties", // Remove a barra inicial para indicar que é um filho de "LandingPage"
            // element: <Properties />,
          },
        ],
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login/>,
      },
    ],
  },
]);