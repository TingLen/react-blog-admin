import { 
    GET_LIST,
    DELETE_ITEM,
 } from '../actions'

const articleList = (state = [],action) => {
    switch (action.type) {
        case GET_LIST:
            return Object.assign(
                [],
                state,
                action.list
                )
            break;
        case DELETE_ITEM:
            let id = action.id
            let newState = state
            let index = newState.findIndex(ele => {
                return ele.id === id
            })
            newState.splice(index,1)
            return Object.assign([],state,newState)
        default:
            return state
            break;
    }
}

export default articleList