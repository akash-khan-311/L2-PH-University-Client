import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";

const { Content, Footer, Sider } = Layout;

const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  UserOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const MainLayout: React.FC = () => {
  return (
    <Layout className="">
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
          items={items}
        />
      </Sider>
      <Layout>
        <Content className="h-[calc(100vh-69px)] flex justify-center items-center">
          <Outlet />
        </Content>
        <Footer className="text-center  flex justify-center items-center ">
          PH University ©{new Date().getFullYear()} Created by{" "}
          <a href="#">Akash Khan</a>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
