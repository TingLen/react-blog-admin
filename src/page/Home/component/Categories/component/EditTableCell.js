import React from 'react'
import { Form,Input } from 'antd'


  

class EditTableCell extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const {getFieldDecorator} = this.props.form
        return (
            <Form>
                <Form.Item>
                    {
                        getFieldDecorator(this.props.record.id,{
                            rules: [{
                                required: true,
                                message: `Please Input!`,
                                }],
                                initialValue: this.props.record.tag,
                        })(<Input/>)
                    }
                </Form.Item>
            </Form>
        )
    }
}



export default Form.create()(EditTableCell)