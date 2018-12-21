import React from 'react'
import './AddForm.css'
import { Button,Input } from 'antd'


class AddForm extends React.Component {
    constructor(props){
        super(props)
    }
    onSubmit = () => {
        console.log("提交")
        this.props.toggleAddForm()
    }

    render() {
        let showNode = (this.props.showAddForm) ? "block" : "none"
        return (
            <div className="AddForm"
             style={{display: showNode}}>
                <div className="AddForm_content">
                    <label className="component">分类</label>
                    <Input type="text" className="component"/>
                    <Button type="dashed" onClick={this.props.toggleAddForm}>取消</Button>
                    <Button type="primary" className="component" onClick={this.onSubmit}>提交</Button>
                </div>
            </div>
        )
    }
}

export default AddForm