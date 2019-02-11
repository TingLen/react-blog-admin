import React from 'react'
import { Form,Input,Select} from 'antd'
import { connect } from 'react-redux'

const FormItem = Form.Item
const Option = Select.Option

class ArticleInfo extends React.Component {
    

    getCategoriesSelect = (data) => {
        return data.map(item => (
            <Option value={item} key={item}>{item}</Option>
        ))
    }

    setCategory = (category) => {
        let article = {}
        article.category = category
        this.props.getAddArticle(article)
    }

    setTitle = () => {
        let article = {}
        article.title = this.refs.inputTitle.input.value
        this.props.getAddArticle(article)
    }

    render() {
        return (
           <Form>
               <FormItem label='标题'>
                   <Input
                    ref='inputTitle'
                    onChange={this.setTitle}
                    type='text'/>
               </FormItem>
               <FormItem label='分类'>
                    <Select 
                        style={{width: 100}}
                        onChange={(value) => this.setCategory(value)}>
                            {this.getCategoriesSelect(this.props.categories)}
                    </Select>
               </FormItem>
           </Form> 
        )
    }
}

export default ArticleInfo