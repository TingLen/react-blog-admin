export const GET_LIST = 'GET_LIST'
export const GET_CATEGORY = 'GET_CATEGORY'
export const DELETE_ITEM = 'DELETE_ITEM'
export const FILTER_LIST = 'FILTER_LIST'
export const SET_VISIBLE_FILTER = 'SET_VISIBLE_FILTER'
export const SEARCH_TITLE = 'SEARCH_TITLE'



export const getList = (list) => {
    return {
        type:GET_LIST,
        list
    }
}

export const getCategory = (category) => {
    return {
        type: GET_CATEGORY,
        category
    }
}

export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        id
    }
}

export const getFilterList = (filterList) => {
    return {
        type: FILTER_LIST,
        filterList
    }
}

export const setVisibleFilter = (filter) => {
    return {
        type: SET_VISIBLE_FILTER,
        filter
    }
}

export const searchTilte = (title) => {
    return {
        type: SEARCH_TITLE,
        title
    }
}