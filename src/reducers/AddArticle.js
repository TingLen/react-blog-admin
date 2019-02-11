import { GET_ADD_ARTICLE } from '../actions'

const article = (state = {}, action) =>{
    switch (action.type) {
        case GET_ADD_ARTICLE:
            return Object.assign(
                {},
                state,
                action.article)
            break;
    
        default:
            return state
            break;
    }
}

export default article