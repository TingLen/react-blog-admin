import { GET_CATEGORY_ADD } from '../actions'

const categoryAdd = (state = [], action) => {
    switch (action.type) {
        case GET_CATEGORY_ADD:
            return action.category
            break;
    
        default:
            return state
            break;
    }
}

export default categoryAdd