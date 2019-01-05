import React from 'react'
import { Table,Button,Modal,Spin,message,Popconfirm } from 'antd'
import './Categories.css'
import { EditableFormRow } from './component/EditFormRow/EditFormRow'
import { EditFormCell } from './component/EditFormCell/EditFormCell'
import AddCategoryButton from './component/AddCategoryButton/AddCategoryButton'
import AddForm from './component/AddForm/AddForm'
import { get,post } from '../../../../http/http'

const confirm = Modal.confirm

const components = {
    body: {
        row: EditableFormRow,
        cell: EditFormCell
    }
}


class Categories extends React.Component {
    constructor(props){
        super(props)

        this.columns = [{
            title: 'tag',
            dataIndex: 'tag',
            editable: true,
          }, {
            title: 'operation',
            dataIndex: 'operation',
            render: (text, record) => (
              this.state.dataSource.length >= 1
                ? (
                  <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.tag)}>
                    <a href="javascript:;">Delete</a>
                  </Popconfirm>     
                ) : null
            ),
          }]

        this.state = {
            dataSource:[],
            showAddForm: false
        }

    }

    componentDidMount(){
        this.getCategory()
    }

    getCategory = (isAfterUpdate,message) => {
        if(isAfterUpdate){
            get("/category/get")
            .then(res => {
                this.setState({
                    dataSource: res.map(item => {
                        item.key = item.id
                        return item
                    })
                },() => {
                    message.success(message)
                })
            })
        }
        else{
            get("/category/get")
            .then(res => {
                this.setState({
                    dataSource: res.map(item => {
                        item.key = item.id
                        return item
                    })
                })
            })
        }
    }

    handleSave = (row) => {
        post("/category/update",{
            id: row.id,
            tag: row.tag
        })
        .then(res => {
                if(res.success){
                    this.getCategory(true,res.message)
                    return
                }
                message.error(res.message)
            })
    }

    handleDelete = (tag) => {
        post("/category/delete",tag)
            .then(res => {
                if(res.success){
                    this.getCategory(true,res.message)
                    return
                }
                message.error(res.message)
            })
    }
    
    toggleAddForm = () => {
        const { showAddForm } = this.state
        this.setState({
            showAddForm: !showAddForm
        })
    }
    

    render() {
        const columns = this.columns.map((col) => {
            if (!col.editable) {
              return col;
            }
            return {
              ...col,
              onCell: record => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave: this.handleSave,
              }),
            }
          })
        return (
            <div className="Categories">
                <Table 
                    components={components}
                    columns={columns}
                    dataSource={this.state.dataSource}/>
                    <AddCategoryButton toggleAddForm={this.toggleAddForm}/>
                    <AddForm
                     showAddForm={this.state.showAddForm}
                     toggleAddForm={this.toggleAddForm}
                     getCategory={this.getCategory}/>
            </div>
        )
    }
}

export default Categories
