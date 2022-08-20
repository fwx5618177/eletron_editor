// import CustomerForm from './customerForm';
import { Row, Col, Form, Input, Button } from 'antd';
import { UserOutlined, LockFilled } from '@ant-design/icons';
import './layout.css';

interface FormI {
  username: string;
  password: string;
}

const Layout = () => {
  const handleSubmit = (values: FormI) => {
    // console.log(values);
    const { username, password } = values;

    if (username === 'fwx' && password === '123') {
      window.location.href = '/dashboard';
    }
  };

  return (
    <>
      <div className="layout_container">
        <section className="layout_login">
          <h3>Login</h3>

          {/* <CustomerForm /> */}
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Form name="loginForm" onFinish={handleSubmit}>
            <Row gutter={24}>
              <Col span={24}>
                <Form.Item
                  name="username"
                  label="Username"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined />}
                    size="large"
                    placeholder="Username"
                    allowClear
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={24}>
              <Col span={24}>
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input
                    prefix={<LockFilled />}
                    size="large"
                    type="password"
                    placeholder="Password"
                    allowClear
                  />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item>
              <div className="layout_login_submit_btn">
                <Button size="middle" type="primary" htmlType="submit">
                  Submit
                </Button>
              </div>
            </Form.Item>
          </Form>
        </section>
        <section className="layout_bg">
          <header>
            <h3>Welcome to this Editor</h3>
          </header>
        </section>
      </div>
    </>
  );
};

export default Layout;
