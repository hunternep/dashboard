import React from 'react';
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
    Checkbox,
    DatePicker,
  Button,
  AutoComplete,
} from 'antd';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
const { RangePicker } = DatePicker;

const residences = [
  {
    value: 'Jayandra Raj Shahi',
    label: 'Jayandra Raj Shahi',
  },
  {
    value: 'Bipuya Bhujel',
    label: 'Bipuya Bhujel',
  },

];

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleAreaChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = [' Square Feet'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const areaOptions = autoCompleteResult.map(area => (
      <AutoCompleteOption key={area}>{area}</AutoCompleteOption>
    ));

      const rangeConfig = {
          rules: [{ type: 'array', required: true, message: 'Please select time!' }],
      };

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item
          label={
            <span>
              Site Name &nbsp;
              <Tooltip title="Your Site Name">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator('sitename', {
            rules: [{ required: true, message: 'Please input Site Name!', whitespace: true }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Owner's Name">
          {getFieldDecorator('residence', {
            initialValue: ['Jayandra Raj Shahi', 'Bipuya Bhujel'],
            rules: [
              { type: 'array', required: true, message: "Please select Owner's Name" },
            ],
          })(<Cascader options={residences} />)}
        </Form.Item>
        <Form.Item
                label={
                    <span>
                        Location &nbsp;
              <Tooltip title="Your Site Location">
                            <Icon type="question-circle-o" />
                        </Tooltip>
                    </span>
                }
            >
                {getFieldDecorator('location', {
                    rules: [{ required: true, message: 'Please input Location', whitespace: true }],
                })(<Input />)}
            </Form.Item>
        <Form.Item label="Site Area">

          {getFieldDecorator('area', {
              rules: [{ required: true, message: 'Please input Area!' }],
          })(
            <AutoComplete
              dataSource={areaOptions}
              onChange={this.handleAreaChange}
              placeholder="Enter Area Of Your Site"
              >
              <Input/>
              </AutoComplete>,
              

          )}
        </Form.Item>
        <Form.Item label="Build Up Area">

                {getFieldDecorator('barea', {
                    rules: [{ required: true, message: 'Please input Build Up Area!' }],
                })(
                    <AutoComplete
                        dataSource={areaOptions}
                        onChange={this.handleAreaChange}
                        placeholder="Enter Build Up Area Of Your Site"
                    >
                        <Input />
                    </AutoComplete>,


                )}
            </Form.Item>
        <Form.Item label="RangePicker[showTime]">
                {getFieldDecorator('range-time-picker', rangeConfig)(
                    <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />,
                )}
            </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Create A Site
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);

export default WrappedRegistrationForm;