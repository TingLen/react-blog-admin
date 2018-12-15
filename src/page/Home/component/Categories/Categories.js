import React from 'react'
import { Table,Tag } from 'antd'
import './Categories.css'

const columns = [{
    title: "Id",
    dataIndex: "id",
    key: "id"
},{
    title: "Tag",
    dataIndex: 'tag',
    key: "tag"
},{
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: () => (
        <div>
            <Tag color="#2db7f5">编辑</Tag>
            <Tag color="red">删除</Tag>
        </div>
    )
}]

const dataSource = [{
    key: "1",
    id: "1",
    tag: "java",
}]

class Categories extends React.Component {
    render() {
        return (
            <div className="Categories">
                <Table
                 columns={columns}
                 dataSource={dataSource}
                 pagination={false}/>
            </div>
        )
    }
}

export default Categories

