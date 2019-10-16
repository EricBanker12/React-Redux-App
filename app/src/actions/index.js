import axios from 'axios'

export const START_SEARCH = 'START_SEARCH'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
export const SEARCH_FAILURE = 'SEARCH_FAILURE'

export const searchActionCreator = query => dispatch => {
    if (!query) return
    const queryURL = `https://api.fda.gov/drug/label.json?search=openfda.brand_name:"${query.replace(/\s/g,'+')}"+openfda.generic_name:"${query.replace(/\s/g,'+')}"+openfda.substance_name:"${query.replace(/\s/g,'+')}"&limit=10&skip=0`
    dispatch({type: START_SEARCH, payload: queryURL})
    axios.get(queryURL)
        .then(resp => {
            console.log(resp)
            dispatch({type: SEARCH_SUCCESS, payload: resp.data})
        })
        .catch(err => {
            console.error(err.message)
            dispatch({type: SEARCH_FAILURE, payload: err.message})
        })
}