import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function SearchForm() {
    const dispatch = useDispatch()
    const { loading, error } = useSelector(({loading, error})=>({loading, error}))

    const [search, setSearch] = React.useState('')

    function submitHandler(e) {
        e.preventDefault()
        if (!loading) {
            // send action
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