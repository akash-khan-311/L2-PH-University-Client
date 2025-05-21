import React from "react";

import { Layout } from "antd";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

const { Content } = Layout;

const MainLayout: React.FC = () => {
  return (
    <Layout className="">
      <Sidebar />
      <Layout>
        <Content className="h-[calc(100vh-69px)] flex justify-center items-center">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
