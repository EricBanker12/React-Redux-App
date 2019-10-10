import {START_SEARCH, SEARCH_SUCCESS, SEARCH_FAILURE} from '../actions'

const initState = {
    // query: '',
    loading: false,
    data: {},
    error: ''
}

function reducer(state = initState, action) {
    switch (action.type) {
        case START_SEARCH:
            return {
                ...state,
                loading: true,
            }
        case SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: '',
            }
        case SEARCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default reducer