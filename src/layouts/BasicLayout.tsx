import { Layout, Menu } from 'antd';
import { history } from 'umi';

const { Header, Content } = Layout;

export default (props: any) => {
  return (
    <Layout>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          onClick={(e) => history.push(e.key)}
          items={[
            { key: '/so-van-bang', label: 'Sổ văn bằng' },
            { key: '/quyet-dinh', label: 'Quyết định' },
            { key: '/cau-hinh', label: 'Cấu hình' },
            { key: '/van-bang', label: 'Văn bằng' },
            { key: '/tra-cuu', label: 'Tra cứu' },
          ]}
        />
      </Header>

      <Content style={{ padding: 20 }}>
        {props.children}
      </Content>
    </Layout>
  );
};