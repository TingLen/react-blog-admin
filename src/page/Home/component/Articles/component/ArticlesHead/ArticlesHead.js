import React from 'react'
import './ArticlesHead.css'
import Search from './component/Search/Search'
import AddButton from './component/AddButton/AddButton'

class ArticlesHead extends React.Component {
    render() {
        return (
            <div className="ArticlesHead">
                <AddButton history={this.props.history}/>
                <Search/>
            </div>
        )
    }
}

export default ArticlesHead