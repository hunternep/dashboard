import React from 'react'
import { Table, Input, Button, Icon, Layout, Breadcrumb  } from 'antd';
import Highlighter from 'react-highlight-words';
const { Content, Footer } = Layout;

class ApiTest extends React.Component {
    constructor() {
        super();
        this.state = {
            data: false,
            searchText: '',
            searchedColumn: '',
        }
    }
    componentDidMount() {
        let url = 'https://onlinesitemanager.com/adminpanel/api/request/siteImg/';
        fetch(url, {
            methos: 'Get',
            headers: {
                'x-api-key': 'Re@!$TATE$T0Ck'
            }
        }).then((result) => {
            result.json().then((resp) => {
                this.setState({ data: resp.data })
            })
        })
    }
  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
      const data = this.state.data;
      console.warn(data);
      const columns = [
          {
              title: 'Site',
              dataIndex: 'site',
              key: 'site',
              ...this.getColumnSearchProps('site'),
          },
          {
              title: 'Title',
              dataIndex: 'title',
              key: 'title',
              ...this.getColumnSearchProps('title'),
          },
          {
              title: 'Description',
              dataIndex: 'desc',
              key: 'desc',
              ...this.getColumnSearchProps('desc'),
          },
          {
              title: 'Photo Date',
              dataIndex: 'photo_date',
              key: 'photo_date',
              ...this.getColumnSearchProps('photo_date'),
          },
          {
              title: 'Images',
              dataIndex: 'imagei',
              key: 'imagei',
              render: () => <Icon type="file-image" />,
          },
      ];
      return (
          <Layout>
              <Content style={{ margin: '0 16px', marginTop: '60px' }}>
                  <Breadcrumb style={{ margin: '16px 0' }}>
                      <Breadcrumb.Item>User</Breadcrumb.Item>
                      <Breadcrumb.Item>Bill Image</Breadcrumb.Item>
                  </Breadcrumb>

                  <div class='CardWrap' style={{ padding: 24, background: '#fff', minHeight: 360 }}> {data ? <Table columns={columns} dataSource={data} /> : <p>Plese Wait...</p>} </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Online Site Manager ©2020</Footer>
          </Layout>
      );
  }
}

export default ApiTest;