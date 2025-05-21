import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { sidebarItemGenerator } from "../../utils/sidebarItemGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { studentPaths } from "../../routes/student.routes";
import { facultyPaths } from "../../routes/faculty.routes";

const Sidebar = () => {
  const userRole = {
    ADMIN: "admin",
    STUDENT: "student",
    FACULTY: "faculty",
    USER: "user",
  };
  const role = "student";
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
  return (
    <Sider
      className="fixed "
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="">
        <h1 className="text-2xl text-white font-bold p-4 text-center">
          PH University
        </h1>
      </div>
      <Menu
        className="flex flex-col items-center justify-center  "
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
