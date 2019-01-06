import React from 'react'
import { Form,Select,Input } from 'antd'
import './Search.css'
import { get } from '../../../../../../../../http/http'

const FormItem = Form.Item
const Option = Select.Option

const dates = ['2018-2-2','2018-3-3','2018-4-4']

class Search extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            categories:[]
        }
    }

    componentDidMount(){
        //获取分类数据
        this.getCategoriesData()
    }

    getCategoriesData = () => {
        get('/category/get')
            .then(res => {
                let categories = res.map(item => {
                    return item.tag
                })
                this.setState({
                    categories: categories
                })
            })
    }

    getCategoriesSelect = (categories) => {
        return categories.map(category => (
            <Option value={category} key={category}>{category}</Option>
        ))
    }
    getDatesSelect = (dates) => {
        return dates.map(date => (
            <Option value={date} key={date}>{date}</Option>
        ))
    }
    render() {
        return (
            <div className="Search component">
                <Form layout="inline">
                    <FormItem label="分类：">
                        <Select style={{width: 100}}>
                            {this.getCategoriesSelect(this.state.categories)}
                        </Select>
                    </FormItem>
                    <FormItem label="日期：">
                        <Select style={{width: 120}}>
                            {this.getCategoriesSelect(dates)}
                        </Select>
                    </FormItem>
                    <FormItem label="标题">
                        <Input/>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

export default Search