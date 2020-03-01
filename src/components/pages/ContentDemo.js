import React  from 'react';
import { Layout, Breadcrumb } from 'antd';
import EditableTable from './Table';
const {Content, Footer } = Layout;


class ContentDemo extends React.Component {
  state = {
    collapsed: false,
    theme: 'dark',
    current: '1',
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
        <Layout collapsed={this.state.collapsed} onCollapse={this.onCollapse} className='ContentStyle' id={this.state.theme}
          onClick={this.handleClick}>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>

            <div class='CardWrap'style={{ padding: 24, background: '#fff', minHeight: 360 }}><EditableTable /></div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Online Site Manager ©2020</Footer>
        </Layout>
    );
  }
}
export default ContentDemo;