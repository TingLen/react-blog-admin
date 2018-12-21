import React from 'react'
import { Button } from 'antd'

class AddCategoryButton extends React.Component {
    render() {
        return (
            <Button
             className="component"
             type="primary"
             onClick={this.props.toggleAddForm}>添加</Button>
        );
    }
}

export default AddCategoryButton