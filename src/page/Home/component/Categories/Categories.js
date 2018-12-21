import React from 'react'
import { Table,Button,Modal } from 'antd'
import './Categories.css'
import EditForm from './component/EditTableCell'
import AddCategoryButton from './component/AddCategoryButton'

const confirm = Modal.confirm

class Categories extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            editable: false,
            editRecord:{
                id: '',
                tag: '',
            }
        }

        this.columns = [{
            title: "Id",
            dataIndex: "id",
            key: "id"
        },{
            title: "Tag",
            dataIndex: 'tag',
            key: "tag",
            render: (text, record, index) => (
                (this.state.editRecord.id === record.id && this.state.editable) ? (
                    <div ref={node => {this.cell = node}}>
                        <EditForm
                     record={record} />
                    </div>
                ) : (
                    <div>
                        {text}
                    </div>
                )
            )
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
        },{
            key: "2",
            id: "2",
            tag: "vue",
        }]
    }


    componentDidUpdate(){
        if(this.state.editable){
            document.addEventListener('click',this.handleClickOutside,true)

        }
    }
    componentWillUnmount() {
        if (this.state.editable) {
          document.removeEventListener('click', this.handleClickOutside, true);
        }
      }

    handleClickOutside = (e) => {
        console.log(this.cell)
        if(this.cell !== undefined && this.cell !== null && (!this.cell.contains(e.target)) && this.state.editable){
            this.setState({
                editable: false
            })
            this.updateTag()
        }
    }

    updateTag = () => {
        console.log(this.state.editRecord)
    }

    editRow = (record) => {
        console.log(record)
        this.setState({
            editable: true,
            editRecord: record
        })
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
                 <AddCategoryButton/>
            </div>
        )
    }
}

export default Categories
