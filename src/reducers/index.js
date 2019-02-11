import { combineReducers } from 'redux'
import articleList from './ArticleList'
import categories from './Category'
import filterList from './VisibilityFilterList'
import filter from './VisibilityFilter'
import searchTitle from './SearchTitle'
import categoryAdd from './CategoryAdd'
import article from './AddArticle'


export const rootReducers =  combineReducers({
    articleList,
    categories,
    filterList,
    filter,
    searchTitle,
    categoryAdd,
    article
})