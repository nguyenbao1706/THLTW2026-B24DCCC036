import { Layout, Menu } from 'antd';
import {
  TeamOutlined,
  FormOutlined,
  UserOutlined,
  BarChartOutlined,
} from '@ant-design/icons';
import { history, useLocation } from 'umi';

const { Sider, Content } = Layout;

export default (props: any) => {
  const location = useLocation();

  const menuItems = [
    { key: '/clb', icon: <TeamOutlined />, label: 'CLB' },
    { key: '/dang-ky', icon: <FormOutlined />, label: 'Đăng ký' },
    { key: '/thanh-vien', icon: <UserOutlined />, label: 'Thành viên' },
    { key: '/bao-cao', icon: <BarChartOutlined />, label: 'Báo cáo' },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={(e) => history.push(e.key)}
        />
      </Sider>

      <Layout>
        <Content style={{ margin: 16 }}>{props.children}</Content>
      </Layout>
    </Layout>
  );
};