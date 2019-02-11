import React from 'react'
import { Table,Button,Modal,message } from 'antd'
import ArticlesHead from './component/ArticlesHead/ArticlesHead'
import './Articles.css'
import { get,delete_ } from '../../../../http/http'
import { connect } from 'react-redux'
import { getList,deleteItem } from '../../../../actions'

const confirm = Modal.confirm

class Articles_ extends React.Component {
    constructor(props){
        super(props)

        this.columns =[{
            title: "日期",
            dataIndex: 'createDate',
            key: "createDate"
        },{
            title: "标题",
            dataIndex: 'title',
            key: "title"
        },{
            title: "分类",
            dataIndex: 'tag',
            key: "tag"
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
    }

    componentDidMount(){
        this.getList()
    }

    /**
     * 1.先获取所有的List
     * 2.遍历list,根据list item的cid，获取tag
     * 3.添加tag属性
     */
    getList = async () => {
        let res = await get("/article/getList")
        for(let item of res){
            let category = await get("/category/getById",{ params: { id: item.cid}})
            item.tag = category.tag
        }
        this.props.getList(res)
    }

    editRow = (record) => {
        const { history } = this.props
        history.push("/home/add")
    }

    deleteRow = (record) => {
        const { id } = record
        const that = this
        confirm({
            title: '确认删除这条记录吗?',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                delete_(`/article/deleteById/${id}`)
              .then(res => {
                  if(res.success){
                    message.success(res.message)
                    //不通过接口调用，而是改编table的state数据
                    that.props.deleteItem(id)
                  }
                  else{
                    message.error(res.message)
                  }
              })
            },
            onCancel() {
              console.log('Cancel');
            },
          })
        
    }

    render() {
        return (
            <div className="Articles">
                <ArticlesHead 
                history={this.props.history}/>
                <Table columns={this.columns} dataSource={this.props.dataSource} rowKey="id"/>
            </div>
        )
    }
}

const getVisibleData = (list,filter,searchTitle) => {
    let visibleList = list.filter(ele => {
        /**
         * 1.全部，title为空
         * 2.其余，title为空
         * 3.其余，title不为空
         */
        if(filter === '全部'){
            if(searchTitle === '') return ele
            if(ele.title === searchTitle) return ele
        }
        if(filter !== '全部'){
            if(searchTitle === ''){
                if(ele.tag === filter) return ele
            }
            else{
                if(ele.tag === filter && ele.title === searchTitle) return ele
            }
        }
        
    })
    return visibleList
}

const mapStateToProps = (state) => {
    return {
        dataSource: getVisibleData(state.articleList,state.filter,state.searchTitle)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getList: (dataSource) => {
            dispatch(getList(dataSource))
        },
        deleteItem: (id) => {
            dispatch(deleteItem(id))
        }
    }
}
const Articles = connect(mapStateToProps,mapDispatchToProps)(Articles_)

export default Articles