import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { sidebarItemGenerator } from "../../utils/sidebarItemGenerator";
import { adminPaths } from "../../routes/admin.routes";

const Sidebar = () => {
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
        items={sidebarItemGenerator(adminPaths, "admin")}
      />
    </Sider>
  );
};

export default Sidebar;
