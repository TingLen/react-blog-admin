import React from 'react'
import { Button } from 'antd'
import './AddButton.css'

class AddButton extends React.Component {
    render() {
        return (
            <div className="AddButton component">
                <Button type="primary">添加文章</Button>
            </div>
        )
    }
}

export default AddButton