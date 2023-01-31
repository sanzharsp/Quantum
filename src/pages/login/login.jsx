import { Button, Form, Input,Card,Typography,notification } from 'antd';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import url from '../../BackendServer'
import Logo from '../../components/logo/logo'
import './index.css'
import { Col, Divider, Row } from 'antd';

const { Title } = Typography;

const Login = () => {
  const [api, contextHolder] = notification.useNotification();
  
  let navigate = useNavigate();
  const onFinish = (values) => {
    console.log(values)

    axios.post(url.BaseUrl+url.Auth.login,values)
    .then(response => 
    {
      localStorage.setItem("access",response.data.access);
      localStorage.setItem("refresh",response.data.refresh);
      localStorage.setItem("user",response.data.user.username);
      navigate("/", { replace: true });

    })
    .catch(err =>{
      
      if (err.response?.status === 401){
        api["error"]({
          message: 'Ошибка входа',
          description:
            'Данный пользователь не найден в системе',
        });
      }
      else{
        alert(err)
      }
    })
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  
  return (

    
    <> 
    {contextHolder}


     
      <Card className='login-container' title={  
          
          <Row justify="center" align="top">
            
          <Logo/>
          <Title level={3}>Quantum Login</Title>
      
        </Row>  
      } bordered={false}>
      <Card >
      
      <Form
    name="basic"
    
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Пожалуйста введите username',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Пароль"
      name="password"
      rules={[
        {
          required: true,
          message: 'Пожалуйста введите пароль',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>



    <Form.Item
wrapperCol={{ offset: 0, span: 16 }} 
    >
      <Button type="primary" style={{width:'100%'}} htmlType="submit">
        Вход
      </Button>
      
    </Form.Item>
  </Form>

      <Button type="dashed"  style={{width:'100%'}} htmlType="submit">
        Регистраия
      </Button>
      

 
  </Card>

      </Card>

      </>

)}
export default Login;