import React from 'react'
import './LoginPage.css'
import { LoginTitle } from './component/LoginTitle/LoginTitle'
import { WrappedLoginForm } from './component/LoginForm/LoginForm'
class LoginPage extends React.Component {
    state = {  }
    render() {
        return (
            <div className="LoginPage page">
                <LoginTitle/>
                <WrappedLoginForm/>
            </div>
        )
    }
}

export default LoginPage