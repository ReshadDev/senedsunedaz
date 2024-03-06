import React, { useEffect } from "react";

import { Layout, Menu } from "antd";
import {
  UnorderedListOutlined,
  PlusOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

const { Sider, Content } = Layout;
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const AdminLayout: React.FC = () => {
  const location = useLocation();
  const [currentPanel, setCurrentPanel] = React.useState<string>(() => {
    const storedPanel = localStorage.getItem("selectedPanel");
    return storedPanel || "admin";
  });

  const handleMenuClick = (panel: string) => {
    setCurrentPanel(panel);
  };

  // Update the selected panel in localStorage when it changes
  useEffect(() => {
    localStorage.setItem("selectedPanel", currentPanel);
  }, [currentPanel]);

  // Update the selected panel when the route changes
  useEffect(() => {
    const pathSegments = location.pathname.split("/");
    const panelFromRoute = pathSegments[pathSegments.length - 1];

    if (panelFromRoute) {
      setCurrentPanel(panelFromRoute);
    }
  }, [location.pathname]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <ToastContainer />
      <Sider width={300} theme="dark">
        <div style={{ textAlign: "center", padding: "16px", color: "white" }}>
          ADMIN PANEL
        </div>
        <Menu
          theme="dark"
          mode="vertical"
          selectedKeys={[currentPanel]}
          onClick={(e) => handleMenuClick(e.key as string)}
        >
          <Menu.Item key="admin" icon={<UnorderedListOutlined />}>
            <Link to="/admin">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="create-document" icon={<PlusOutlined />}>
            <Link to="create-document">Create Erize</Link>
          </Menu.Item>
          <Menu.Item key="create-category" icon={<AppstoreAddOutlined />}>
            <Link to="create-category">Create Category</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ padding: "24px" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
