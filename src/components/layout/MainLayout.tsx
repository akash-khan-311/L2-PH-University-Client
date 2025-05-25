import React from "react";

import { Layout } from "antd";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

const { Content } = Layout;

const MainLayout: React.FC = () => {
  return (
    <Layout className="">
      <Sidebar />
      <Layout className="">
        <Content className="min-h-screen bg-slate-900 p-10">
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px]  rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px]  rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
