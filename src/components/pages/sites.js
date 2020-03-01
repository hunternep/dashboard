import React  from 'react'; 
import { Card, Icon,Layout, Breadcrumb,Button } from 'antd';
import DrawerForm from '../addFile'
const {Content, Footer } = Layout;
const { Meta } = Card;

class Sites extends React.Component {
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
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              <Breadcrumb.Item>Sites</Breadcrumb.Item>
            </Breadcrumb>
            
            <div class='CardWrap' style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    <DrawerForm />
              <Card
              style={{ width: 300 }}
              cover={
              <img
              alt="example"
                      src="https://hoodline.imgix.net/uploads/story/image/699371/gov_building_permits_unsplash_11.jpg.jpg?auto=format"/>
              }
              actions={[
              <Icon type="setting" key="setting" />,
              <Icon type="edit" key="edit" />,
              <Icon type="ellipsis" key="ellipsis" />,
              ]}
              >
              <Meta
              title="Site 1"
              description="Site Engineer : Jayandra Raj Shahi Location: Satdobato"
              />
              </Card>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Online Site Manager ©2020</Footer>
        </Layout>
    );
  }
}
export default Sites;