import React from 'react'
import { Button } from 'antd'

class UploadButton extends React.Component {
    render() {
        return (
            <Button 
            type="primary"
            onClick={ this.props.update }>上传</Button>
        )
    }
}


export default UploadButton