import React from 'react'
import { useSelector } from 'react-redux'

import DrugHeader from './DrugHeader'
import Pagination from './Pagination'

function SearchResults() {
    const { data, loading, error } = useSelector(({data, loading, error})=>({data, loading, error}))

    if (!data.results) return <div></div>

    if (loading) return <div className='text-center'>Loading Results...</div>

    if (error) return <div className='text-danger text-center' >{error}</div>

    return (
        <section className="col-sm-9 mx-auto">
            {data.results.map(drug => <DrugHeader key={drug.id} drug={drug} />)}
            <Pagination />
        </section>
    )
}

export default SearchResults