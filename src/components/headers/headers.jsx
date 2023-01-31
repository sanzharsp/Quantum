import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import { UserOutlined,HomeOutlined,LoginOutlined  } from '@ant-design/icons';
import { Avatar, Image ,Input, Space, Carousel,Badge} from 'antd';
import { slide as BurgerMenu } from 'react-burger-menu'
import {Link} from "react-router-dom";

import './index.css'


const { Search } = Input;

const { Header, Content, Footer } = Layout;
const Component = (props) => {
  const onSearch = (value) => console.log(value);


  const items = [

  {
    key: 'search',
    icon: <Search placeholder="Что искать" onSearch={onSearch} style={{ width: 150 }} />,

  },
  {
    key: 'avatar',
    icon: <Avatar icon={<UserOutlined />}  />,
  },


];
  const {
    token: { colorBgContainer },
  } = theme.useToken();
 
  return (
<>
<BurgerMenu right >
        <Link  to={"/"} className="menu-item tegA"><HomeOutlined /> Главная</Link>
        <Link  to={"login"} className="menu-item tegA"><LoginOutlined /> Авторизаия</Link>
 
  
      </BurgerMenu>
  <Layout className="layout">

      <Header style={{ background:'white',marginTop:20 }} >
      <div className="navi">
      <Search placeholder="Введите что найти" allowClear onSearch={onSearch} style={{ width: 200 }} />
      <Badge dot>
      <Avatar  shape="square"  onClick={()=>{console.log("clicked")}} icon={<UserOutlined />}  />
      </Badge>
        </div>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>{props.named}</Breadcrumb.Item>

        </Breadcrumb>
        <div className="site-layout-content" style={{ background: colorBgContainer }}>

    {props.content}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Design ©2023 Created by Sanzhar Sapar</Footer>
    </Layout>
    </>
)}
export default Component;

