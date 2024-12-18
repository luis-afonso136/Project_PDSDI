import React from "react";
import ReactDOM from "react-dom/client";
import "./client/themes/index.css";
// importar/configurar o react-router-dom
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { AuthProvider } from "./providers/authProvider";
// import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <ToastContainer /> */}
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
