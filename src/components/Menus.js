import React from 'react';
import {Link} from 'react-router-dom';
import { Layout, Menu, Icon, Switch } from 'antd';
import logo from '../logoMain.png';
import textlogo from '../textLogo.png';
const { Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
    state = {
        collapsed: false,
        hidden: false,
        theme: 'light',
        current: '1',
        activeMen: 1,
    };

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    onHide = hidden => {
        this.setState({ hidden });
    }
    changeTheme = value => {
        this.setState({
            theme: value ? 'dark' : 'light',
        });
    };

  handleClick = e => {
    
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
        <Sider className='SideBarStyle' theme={this.state.theme}
          onClick={this.handleClick} collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="MainLogo">
            <img src={logo} alt='MainLogo'/>
            <img className='hiddenOncollapse' src={textlogo} alt='TextLogo'/>
          </div> 
          <div className="ThemeWrapper">
            <span>
              <Icon type="alert" />
              Switch theme
            </span>
            <Switch
              checked={this.state.theme === 'dark'}
              onChange={this.changeTheme}
              checkedChildren="Dark"
              unCheckedChildren="Light"
            />
          </div>
          <Menu theme={this.state.theme}
          onClick={this.handleClick} defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
            <Link to='/'>
              <Icon type="pie-chart" />
              <span>Dashbord</span>
            </Link>
            </Menu.Item>
           
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>Site Setup</span>
                </span>
              }
                >
                    <Menu.Item key="2"><Link to='/user'>
                        <Icon type="desktop" />
                        <span>Sites Owner</span>
                    </Link></Menu.Item>
             <Menu.Item key="3">
                        <Link to='/sites'>
                            <Icon type="desktop" />
                            <span>Sites</span>
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="4">
                    <Link to=''>
                        <Icon type="file" />
                        <span>Site Bill</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="5">
                    <Link to='/sitePhotos'>
                        <Icon type="file-image" />
                        <span>Site Photos</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="6">
                    <Link to='/Api'>
              <Icon type="file" />
                        <span>API</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="7">
                    <Link to='/login'>
                        <Icon type="file" />
                        <span>Login</span>
                    </Link>
                </Menu.Item>
                
          </Menu>
        </Sider>
    );
  }
}
export default SiderDemo;