import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Outlet } from 'react-router';
import './dash.css';
import routes from './routes';

const { Header, Sider, Content } = Layout;

const Dash = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        height: '100vh',
        overflowY: 'hidden',
        overflowX: 'hidden',
      }}
    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h3>Moxi</h3>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['text']}
          items={routes()}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            overflowY: 'scroll',
            overflowX: 'hidden',
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dash;
