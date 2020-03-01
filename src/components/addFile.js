import React from 'react';
import { Drawer, Button,Icon, InputNumber } from 'antd';
import RegistrationForm from './from.js';


class DrawerForm extends React.Component {
    state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
    render() {
      return (
          <div>
              <Button type="primary" style={{ marginBottom: 24 }} onClick={this.showDrawer}>
          <Icon type="plus" /> New Site
        </Button>
        <Drawer
          title="Add New Site"
          width={720}
          placement="right"
          closable={true}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <RegistrationForm />
        </Drawer>
      </div>
    );
  }
}



export default DrawerForm;