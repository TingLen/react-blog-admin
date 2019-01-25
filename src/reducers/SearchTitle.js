import { SEARCH_TITLE } from '../actions'

const searchTitle = (state = '',action) => {
    switch (action.type) {
        case SEARCH_TITLE:
            return action.title
            break;
    
        default:
            return state
            break;
    }
}

export default searchTitle