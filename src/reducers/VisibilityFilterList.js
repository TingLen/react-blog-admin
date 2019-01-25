import { FILTER_LIST } from '../actions'

const filterList = (state = [], action) => {
    switch (action.type) {
        case FILTER_LIST:
            return action.filterList
            break;
    
        default:
            return state
            break;
    }
}

export default filterList

