import React from 'react'
import { useSelector } from 'react-redux'

import DrugHeader from './DrugHeader'

function SearchResults() {
    const { data, loading, error } = useSelector(({data, loading, error})=>({data, loading, error}))

    if (!data.results) return <div></div>

    if (loading) return <div>Loading Results...</div>

    if (error) return <div>{error}</div>

    return (
        <section className="col-sm-9 mx-auto">
            {data.results.map(drug => <DrugHeader key={drug.id} drug={drug} />)}
        </section>
    )
}

export default SearchResults