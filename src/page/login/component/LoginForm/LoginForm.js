import React from 'react'
import './LoginForm.css'
import {Form, Icon, Input, Button, message} from 'antd'
import { post } from '../../../../http/http'
import { withRouter } from 'react-router-dom'


const FormItem = Form.Item

message.config({
    duration:1
})

class LoginForm extends React.Component {


    login = (e) => {
        //阻止表单默认的提交行为
        e.preventDefault()
        //进行验证,value是表单数据
        this.props.form.validateFields((err, values) => {
        if (!err) {
            post("/user/login",values)
                .then(res => {
                    if(res.success){
                        message.success(res.message)
                        setTimeout(() => {
                            this.props.history.push("/home")
                        },1000)
                    }
                    else{
                        message.error(res.message)
                        this.props.form.resetFields()
                    }
                })
        }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <Form 
             className="LoginForm component"
             onSubmit={this.login}>
                <FormItem>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                         prefix={<Icon type="user" 
                         style={{ color: 'rgba(0,0,0,.25)' }} />} 
                         placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input 
                         prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                         type="password" 
                         placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    <Button
                     type="primary"
                     htmlType="submit" 
                     className="login-form-button"
                     htmlType="submit">
                        Log in
                    </Button>
                </FormItem>
            </Form>
        )
    }
}

export const WrappedLoginForm = withRouter(Form.create()(LoginForm))