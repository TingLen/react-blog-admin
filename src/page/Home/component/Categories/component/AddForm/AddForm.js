import React from 'react'
import './AddForm.css'
import { Button,Input,message } from 'antd'
import { post } from '../../../../../../http/http'


class AddForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
    }
    onSubmit = () => {
        post("category/add",this.state.value)
            .then(res => {
                if(res.success){
                    this.props.getCategory(true,res.message)
                    return
                }
                message.error(res.message)
            })
        this.props.toggleAddForm()
    }

    onChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }


    render() {
        let showNode = (this.props.showAddForm) ? "block" : "none"
        return (
            <div className="AddForm"
             style={{display: showNode}}>
                <div className="AddForm_content">
                    <label className="component">分类</label>
                    <Input 
                     ref={node => this.input = node}
                     type="text"
                     className="component" 
                     onChange={(e) => this.onChange(e)}/>
                    <Button type="dashed" onClick={this.props.toggleAddForm}>取消</Button>
                    <Button type="primary" className="component" onClick={this.onSubmit}>提交</Button>
                </div>
            </div>
        )
    }
}

export default AddForm