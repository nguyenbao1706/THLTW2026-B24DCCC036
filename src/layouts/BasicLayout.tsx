import { Layout, Menu } from 'antd';
import { history } from 'umi';

const { Sider, Content } = Layout;

export default (props: any) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <h2 style={{ color: 'white', padding: 16 }}>ADMIN</h2>

        <Menu
          theme="dark"
          mode="inline"
          onClick={({ key }) => history.push(key)}
          items={[
            { key: '/order', label: 'Đơn hàng' },
            { key: '/customer', label: 'Khách hàng' },
            { key: '/product', label: 'Sản phẩm' },
          ]}
        />
      </Sider>

      <Layout>
        <Content style={{ margin: 20 }}>
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};