import React from 'react'
import { Table,Tag } from 'antd'
import ArticlesHead from './component/ArticlesHead/ArticlesHead'
import './Articles.css'


const columns = [{
    title: "Id",
    dataIndex: "id",
    key: "id"
},{
    title: "日期",
    dataIndex: 'date',
    key: "date"
},{
    title: "标题",
    dataIndex: 'title',
    key: "title"
},{
    title: "操作",
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
    date: "2018-10-10",
    title: '这是标题'
}]

class Articles extends React.Component {
    render() {
        return (
            <div className="Articles">
                <ArticlesHead/>
                <Table columns={columns} dataSource={dataSource}/>
            </div>
        )
    }
}

export default Articles