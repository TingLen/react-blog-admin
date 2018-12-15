import React from 'react'
import { Table,Button,Modal } from 'antd'
import ArticlesHead from './component/ArticlesHead/ArticlesHead'
import './Articles.css'

const confirm = Modal.confirm

class Articles extends React.Component {
    constructor(props){
        super(props)
        this.columns =[{
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
            render: (text, record, index) => {
                return (
                    <div>
                        <Button 
                        type="primary"
                        size="small"
                        className="component"
                        onClick={() => this.editRow(record)}>编辑</Button>
                        <Button type="danger"
                        size="small"
                        className="component"
                        onClick={() => this.deleteRow(record)}>删除</Button>
                    </div>  
                )
            }
                
            
        }]

        this.dataSource = [{
            key: "1",
            id: "1",
            date: "2018-10-10",
            title: '这是标题'
        }]
    }

    editRow = (record) => {

    }

    deleteRow = (record) => {
        const { id } = record

        confirm({
            title: '确认删除这条记录吗?',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
              console.log('OK');
            },
            onCancel() {
              console.log('Cancel');
            },
          })
        
    }

    render() {
        return (
            <div className="Articles">
                <ArticlesHead/>
                <Table columns={this.columns} dataSource={this.dataSource}/>
            </div>
        )
    }
}

export default Articles