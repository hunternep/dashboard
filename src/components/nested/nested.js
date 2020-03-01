import React from 'react'
import { Table } from 'antd'

export default class ApiTestn extends React.Component {
    constructor() {
        super();
        this.state = {
            data:false 
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
                this.setState({data:resp.data})
            })
        })
    }

    render() {
        const data = this.state.data;
        console.warn(data);
        const columns = [
            {
                title: 'Site',
                dataIndex: 'site',
                key: 'site',
            },
            {
                title: 'Title',
                dataIndex: 'title',
                key: 'title',
            },
            {
                title: 'Description',
                dataIndex: 'desc',
                key: 'desc',
            },
            {
                title: 'Photo Date',
                dataIndex: 'photo_date',
                key: 'photo_date',
            },
        ];
        return (
            <Table dataSource={dataSource} columns={columns} />;   
        )
    }
}