import React  from 'react';
import { Layout, Avatar, Menu, Dropdown} from 'antd';

const { Header } = Layout;
const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="changePass">Change Password</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="logOut">LogOut</a>
    </Menu.Item>
  </Menu>
  );

class MainHeader extends React.Component {
  render() {
    return (
      <Header className='MainHeader' style={{ background: '#fff', padding: 0 }}>
        <Dropdown overlay={menu} trigger={['click']}>
      <a className="ant-dropdown-link dropdownAvatar" href="_blank">
      <Avatar className='AvatarStyle' size={40} icon="user" />
    </a>
  </Dropdown>,
      s</Header>  
    );
  }
}
export default MainHeader;

