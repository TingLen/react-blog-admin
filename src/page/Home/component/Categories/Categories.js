import React from 'react'
import { Table,Button,Modal } from 'antd'
import './Categories.css'

const confirm = Modal.confirm

class Categories extends React.Component {
    constructor(props){
        super(props)
        this.columns = [{
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
            tag: "java",
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
            <div className="Categories">
                <Table
                 columns={this.columns}
                 dataSource={this.dataSource}
                 pagination={false}/>
            </div>
        )
    }
}

export default Categories

