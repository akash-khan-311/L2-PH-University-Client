import { Button, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { sidebarItemGenerator } from "../../utils/sidebarItemGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { studentPaths } from "../../routes/student.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logOut, useCurrentUser } from "../../redux/features/auth/authSlice";
import type { TUser } from "../../types";

// Define a User type with a role property

const Sidebar = () => {
  const user = useAppSelector(useCurrentUser) as TUser;
  const role = user?.role;

  const dispatch = useAppDispatch();

  const userRole = {
    ADMIN: "admin",
    STUDENT: "student",
    FACULTY: "faculty",
    USER: "user",
  };

  let sidebarItems;
  switch (role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemGenerator(adminPaths, userRole.ADMIN);
      break;

    case userRole.STUDENT:
      sidebarItems = sidebarItemGenerator(studentPaths, userRole.STUDENT);
      break;
    case userRole.FACULTY:
      sidebarItems = sidebarItemGenerator(facultyPaths, userRole.FACULTY);
      break;
    default:
      break;
  }

  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <Sider
      className="fixed z-[9999]"
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="flex flex-col h-screen bg-white/10  backdrop-blur-3xl justify-between  ">
        <div>
          <div className="">
            <h1 className="text-2xl text-white font-bold p-4 text-center">
              PH University
            </h1>
          </div>
          <Menu
            style={{ backgroundColor: "transparent" }}
            className="flex flex-col items-center justify-center "
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={sidebarItems}
          />
        </div>
        <div>
          <Button onClick={handleLogOut} type="primary" className="w-full">
            Logout
          </Button>
        </div>
      </div>
    </Sider>
  );
};

export default Sidebar;
