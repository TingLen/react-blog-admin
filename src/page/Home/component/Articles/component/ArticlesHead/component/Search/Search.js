import React from 'react'
import { Form,Select,Input } from 'antd'
import './Search.css'
import { getFilterList,setVisibleFilter,searchTilte } from '../../../../../../../../actions'
import { get } from '../../../../../../../../http/http'
import { connect } from 'react-redux'

const FormItem = Form.Item
const Option = Select.Option
class Search extends React.Component {


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
                categories.unshift('全部')
                this.props.getCategories(categories)
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

    selectCategory = (value) => {
        this.props.setVisibilityCategory(value)
    }

    search = (e) => {
        let title = this.refs.inputText.input.value
        this.props.searchTitle(title)
    }

    render() {
        return (
            <div className="Search component">
                <Form layout="inline">
                    <FormItem label="分类：">
                        <Select 
                        defaultValue='全部' 
                        style={{width: 100}}
                        onChange={(value) => this.props.setVisibilityCategory(value)}>
                            {this.getCategoriesSelect(this.props.categories)}
                        </Select>
                    </FormItem>
                    <FormItem label="标题">
                        <Input ref='inputText' onPressEnter={this.search} type='text'/>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.filterList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCategories: categories => dispatch(getFilterList(categories)),
        setVisibilityCategory: category => dispatch(setVisibleFilter(category)),
        searchTitle: title => dispatch(searchTilte(title))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search)