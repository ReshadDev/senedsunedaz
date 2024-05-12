import React, { useEffect } from 'react';
import { Layout, Menu } from 'antd';
import {
  UnorderedListOutlined,
  PlusOutlined,
  AppstoreAddOutlined,
} from '@ant-design/icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const { Sider, Content } = Layout;
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from '../../context/auth';

const AdminLayout: React.FC = () => {
  const location = useLocation();
  const [currentPanel, setCurrentPanel] = React.useState<string>(() => {
    const storedPanel = localStorage.getItem('selectedPanel');
    return storedPanel || 'admin';
  });

  const handleMenuClick = (panel: string) => {
    setCurrentPanel(panel);
  };

  useEffect(() => {
    localStorage.setItem('selectedPanel', currentPanel);
  }, [currentPanel]);

  useEffect(() => {
    const pathSegments = location.pathname.split('/');
    const panelFromRoute = pathSegments[pathSegments.length - 1];

    if (panelFromRoute) {
      setCurrentPanel(panelFromRoute);
    }
  }, [location.pathname]);

  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      tokenPair: { accessToken: '', refreshToken: '' },
    });
    localStorage.removeItem('auth');
    toast.success('Çıxış edildi');
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <Layout style={{ minHeight: '900px' }}>
      <ToastContainer />
      <Sider width={400} theme='dark'>
        <div style={{ textAlign: 'center', padding: '16px', color: 'white' }}>
          <p>ADMIN PANEL</p>{' '}
          <button onClick={handleLogout} className='admin-btns'>
            Çıxış et
          </button>
        </div>

        <Menu
          theme='dark'
          mode='vertical'
          selectedKeys={[currentPanel]}
          onClick={(e) => handleMenuClick(e.key as string)}
        >
          <Menu.Item key='admin' icon={<UnorderedListOutlined />}>
            <Link to='/admin'>Dashboard</Link>
          </Menu.Item>
          <Menu.Item key='create-document' icon={<PlusOutlined />}>
            <Link to='create-document'>Ərizə yarat</Link>
          </Menu.Item>
          <Menu.Item key='create-category' icon={<PlusOutlined />}>
            <Link to='create-category'>Kateqoriya yarat</Link>
          </Menu.Item>
          <Menu.Item key='create-cv' icon={<PlusOutlined />}>
            <Link to='create-cv'>CV yarat</Link>
          </Menu.Item>
          <Menu.Item key='all-documents' icon={<AppstoreAddOutlined />}>
            <Link to='all-documents'>Bütün Ərizələr</Link>
          </Menu.Item>
          <Menu.Item key='all-categories' icon={<AppstoreAddOutlined />}>
            <Link to='all-categories'>Bütün Kateqoriyalar</Link>
          </Menu.Item>
          <Menu.Item key='all-cv' icon={<AppstoreAddOutlined />}>
            <Link to='all-cv'>Bütün Cvlər</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ padding: '24px' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
