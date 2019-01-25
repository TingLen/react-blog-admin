import { SET_VISIBLE_FILTER } from '../actions/index'

const visibilityFilter = (state = '全部', action) => {
    switch (action.type) {
        case SET_VISIBLE_FILTER:
            return action.filter
            break;
    
        default:
            return state
            break;
    }
}

export default visibilityFilter