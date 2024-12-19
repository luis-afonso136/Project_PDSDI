import React from "react";
import ReactDOM from "react-dom/client";
import "./client/themes/index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { AuthProvider } from "./providers/authProvider";
import { ToastContainer } from 'react-toastify';  // Importando o ToastContainer
import 'react-toastify/dist/ReactToastify.css';  // Estilos do Toastify

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />  {/* Adicionando o ToastContainer aqui */}
    </AuthProvider>
  </React.StrictMode>
);
