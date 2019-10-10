import React from 'react'

function DrugInfo({ drug }) {
    return (
        <>
            {drug.description?drug.description.map((desc,i) => <p key={i}>{desc}</p>):''}
            {drug.indications_and_usage?drug.indications_and_usage.map((desc,i) => <p key={i}>{desc}</p>):''}
        </>
    )
}

export default DrugInfo