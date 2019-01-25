import {
    GET_CATEGORY
} from '../actions'


const categories = (state = [], action) => {
    switch (action) {
        case GET_CATEGORY:
            return Object.assign(
                [],
                state,
                action.category
            )
            break;
    
        default:
            return state
            break;
    }
}

export default categories