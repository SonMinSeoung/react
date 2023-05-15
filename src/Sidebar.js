import { FileOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { Title } from './data';
import { Route, Router, Routes, useParams, useLocation, Link} from 'react-router-dom';
import Profile from './common/homwork';


const { Header, Content, Footer, Sider } = Layout;

function getItem(label, id, icon, children, to=`/${id}`) {
  return {
    id,
    icon,
    children,
    label,
    to
  };
}
const MenuComponent = () => {
  const handleSelected = (key) => {
    console.log(key);
    // 선택된 메뉴 아이템에 대한 처리 로직 추가
  }
};

const items = [];
Title.forEach((Title,index) => {
    let subItem =[];
        Title.subhead.forEach(el =>{
            subItem.push(getItem(el.name,el.id));
        })
    items.push(
        getItem(Title.name,Title.id,<TeamOutlined />,subItem));
    });
//함수 배열 map으로 처리 못함 이유 아직 모름

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState(null);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (

      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div
            style={{
              height: 32,
              margin: 16,
              background: 'rgba(255, 255, 255, 0.2)',
            }}
          />
          <Menu theme="dark" mode="inline" items={items} onSelect={MenuComponent}>
            {items.map((item,index) => (
              <Menu.Item key={item.id}>
                <Link to={item.to} key={index}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          />
          <Content
            style={{
              margin: '0 16px',
            }}
          >
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
            <h1>이제 움직여줘</h1>
            </div>

          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            카피라이트는 필요가없지 뭐얌
          </Footer>
        </Layout>
      </Layout>

  );
};
export default App;