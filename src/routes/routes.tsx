import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";

import { adminPaths } from "./admin.routes";
import { routesGenerator } from "../utils/routesGenerator";
import { studentPaths } from "./student.routes";
import { facultyPaths } from "./faculty.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: routesGenerator(adminPaths),
  },
  {
    path: "/student",
    element: <App />,
    children: routesGenerator(studentPaths),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routesGenerator(facultyPaths),
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
