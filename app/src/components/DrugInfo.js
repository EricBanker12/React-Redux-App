import React from 'react'

function DrugInfo({ drug }) {
    return (
        <>
            {drug.description.map(desc => <p>{desc}</p>)}
            {drug.indications_and_usage.map(desc => <p>{desc}</p>)}
        </>
    )
}

export default DrugInfo