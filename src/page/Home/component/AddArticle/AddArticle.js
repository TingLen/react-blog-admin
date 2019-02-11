import React from 'react'
import './AddArticle.css'
import SimpleMDE from 'simplemde'
import 'simplemde/dist/simplemde.min.css'
import UploadButton from './component/UploadButton';
import ArticleInfo from './component/ArticleInfo'
import { connect } from 'react-redux'
import { getCategoryAdd,getAddArticle } from '../../../../actions'



class AddArticle extends React.Component {
    constructor(props){
        super(props)
        this.simplemde = null


    }
    componentDidMount(){
        //simplemde
         this.simplemde = new SimpleMDE({ 
            element: document.getElementById("mdEdit"),
            tabSize: 4,
            autofocus:true,
            spellChecker:false
         })

         //获取categories
         let len = this.props.categories.length
         let categories = this.props.categories.slice(1,len)
         this.props.getCategoryAdd(categories)
    }

    /**
     * value： 获取markdown语法字符串
     * markdown: 传入markdown语法字符串并转化为html标签字符串
     */
    update = () => {
        let article = {}
        let m_content = this.simplemde.value()
        let h_content = this.simplemde.markdown(m_content)
        article.m_content = m_content
        article.h_content = h_content
        this.props.getAddArticle(article)
    }


    render() {
        return (
            <div className="AddArticle component">
                <ArticleInfo
                 getAddArticle={this.props.getAddArticle}
                 categories={this.props.categoryAdd}/>
                <textarea id="mdEdit"/>
                <UploadButton update={ this.update }/>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.filterList,
        categoryAdd: state.categoryAdd,
        article: state.article
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCategoryAdd: (categoryAdd) => {
            dispatch(getCategoryAdd(categoryAdd))
        },
        getAddArticle: (article) => {
            dispatch(getAddArticle(article))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddArticle)