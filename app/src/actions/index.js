import axios from 'axios'

export const START_SEARCH = 'START_SEARCH'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
export const SEARCH_FAILURE = 'SEARCH_FAILURE'

export const searchActionCreator = query => dispatch => {
    if (!query) return
    dispatch({type: START_SEARCH})
    axios.get(`https://api.fda.gov/drug/label.json?search="${query.replace(/\s/g,'+')}"&limit=10`)
        .then(resp => {
            console.log(resp)
            dispatch({type: SEARCH_SUCCESS, payload: resp.data})
        })
        .catch(err => {
            console.error(err.message)
            dispatch({type: SEARCH_FAILURE, payload: err.message})
        })
}