import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutPage from "../pages/About";
import ContactPage from "../pages/Contact";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";

import { adminPaths } from "./admin.routes";
import { routesGenerator } from "../utils/routesGenerator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <App />,
    children: routesGenerator(adminPaths),
  },

  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

export default router;
