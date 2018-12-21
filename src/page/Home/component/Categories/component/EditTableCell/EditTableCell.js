import React from 'react'
import { Form,Input } from 'antd'


  

class EditTableCell extends React.Component {
    constructor(props){
        super(props)
        
    }

    // componentDidMount(){
    //     document.addEventListener('click',this.handleClickOutside)
    // }

    // handleClickOutside = (e) => {
    //     if(this.cell.input !== e.target){
    //         this.updateTag(this.props.record)
    //     }
    // }

    // updateTag = (record) => {
    //     console.log(record)
    // }

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
                        })(<Input  ref={node => this.cell = node}/>)
                    }
                </Form.Item>
            </Form>
        )
    }
}



export default Form.create()(EditTableCell)