import React from 'react'
import { Button } from 'antd'
import './AddButton.css'

class AddButton extends React.Component {

    goAdd = () => {
        const { history } = this.props
        history.push("/home/add")
    }

    render() {
        return (
            <div className="AddButton component">
                <Button type="primary" onClick={this.goAdd}>添加文章</Button>
            </div>
        )
    }
}

export default AddButton