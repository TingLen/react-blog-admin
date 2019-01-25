import React from 'react'
import { Form,Input,Select} from 'antd'
import { connect } from 'react-redux'

const FormItem = Form.Item
const Option = Select.Option

class ArticleInfo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            category: ''
        }
    }

    getCategoriesSelect = (data) => {
        return data.map(item => (
            <Option value={item} key={item}>{item}</Option>
        ))
    }

    render() {
        return (
           <Form>
               <FormItem label='标题'>
                   <Input typetext/>
               </FormItem>
               <FormItem label='分类'>
                    <Select 
                        style={{width: 100}}
                        onChange={(value) => this.setState({category: value})}>
                            {this.getCategoriesSelect(this.props.categories)}
                    </Select>
               </FormItem>
           </Form> 
        );
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.filterList
    }
}

export default connect(mapStateToProps)(ArticleInfo)