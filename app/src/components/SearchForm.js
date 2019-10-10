import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { searchActionCreator } from '../actions'

function SearchForm() {
    const dispatch = useDispatch()
    const { loading, error } = useSelector(({loading, error})=>({loading, error}))

    const [search, setSearch] = React.useState('')

    function submitHandler(e) {
        e.preventDefault()
        if (!loading) {
            dispatch(searchActionCreator(search))
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <input
                type='text'
                placeholder='Search'
                value={search}
                onChange={e=>{setSearch(e.target.value)}}
            />
        </form>
    )
}

export default SearchForm