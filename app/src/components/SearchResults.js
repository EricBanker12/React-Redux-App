import React from 'react'
import { useSelector } from 'react-redux'

import DrugHeader from './DrugHeader'

function SearchResults() {
    const { data, loading, error } = useSelector(({data, loading, error})=>({data, loading, error}))

    if (!data.results) return <div></div>

    if (loading) return <div>Loading Results...</div>

    if (error) return <div>{error}</div>

    return (
        <>
            <section>
                {data.results.map(drug => <DrugHeader key={drug.id} drug={drug} />)}
            </section>
            <footer>
                <p>Disclaimer: {data.meta.disclaimer}</p>
            </footer>
        </>
    )
}

export default SearchResults