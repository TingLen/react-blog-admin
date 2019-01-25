import React from 'react'
import './AddArticle.css'
import SimpleMDE from 'simplemde'
import 'simplemde/dist/simplemde.min.css'
import UploadButton from './component/UploadButton';



class AddArticle extends React.Component {
    constructor(props){
        super(props)
        this.simplemde = null
    }
    componentDidMount(){
         this.simplemde = new SimpleMDE({ 
            element: document.getElementById("mdEdit"),
            tabSize: 4,
            autofocus:true,
            spellChecker:false
         })
    }

    /**
     * value： 获取markdown语法字符串
     * markdown: 传入markdown语法字符串并转化为html标签字符串
     */
    update = () => {
        const text = this.simplemde.value()
        
    }
    render() {
        return (
            <div className="AddArticle component">
                <textarea id="mdEdit"/>
                <UploadButton update={ this.update }/>
            </div>

        )
    }
}

export default AddArticle