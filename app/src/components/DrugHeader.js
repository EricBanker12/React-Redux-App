import React from 'react'

function DrugHeader(props) {
    const { openfda } = props.drug

    if (!openfda || !openfda.brand_name) return <div></div>

    return (
        <div>
            <h4>Brand Name(s): {openfda.brand_name.map((name, i) => <span key={i}>{name}</span>)}</h4>
            <p>Generic Name(s): {openfda.generic_name.map((name, i) => <span key={i}>{name}</span>)}</p>
            <p>Manufacturer(s): {openfda.manufacturer_name.map((name, i) => <span key={i}>{name}</span>)}</p>
        </div>
    )
}

export default DrugHeader