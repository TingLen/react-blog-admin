import React from 'react'
import './AddArticle.css'
import SimpleMDE from 'simplemde'
import 'simplemde/dist/simplemde.min.css'


class AddArticle extends React.Component {
    componentDidMount(){
        var simplemde = new SimpleMDE({ 
            element: document.getElementById("mdEdit"),
            tabSize: 4,
            autofocus:true,
            spellChecker:false
         })
    }
    render() {
        return (
            <div className="AddArticle page">
                <textarea id="mdEdit"/>
            </div>

        )
    }
}

export default AddArticle