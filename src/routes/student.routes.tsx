import StudentDashboard from "../pages/student/StudentDashboard";
import StudentOfferedCourse from "../pages/student/StudentOfferedCourse";

export const studentPaths = [
  { name: "Dashboard", path: "dashboard", element: <StudentDashboard /> },
  {
    name: "Offered Courses",
    path: "offered-courses",
    element: <StudentOfferedCourse />,
  },
];
