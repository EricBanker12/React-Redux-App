import React from 'react'

import DrugInfo from './DrugInfo'

function DrugHeader(props) {
    const { openfda } = props.drug
    const [showMore, setShowMore] = React.useState(false)

    if (!openfda || !openfda.brand_name) return <div></div>

    return (
        <div style={{cursor:'pointer'}} onClick={()=>{setShowMore(!showMore)}}>
            <h4>Brand Name(s): {openfda.brand_name.map((name, i) => <span key={i}>{name}</span>)}</h4>
            <p>Generic Name(s): {openfda.generic_name.map((name, i) => <span key={i}>{name}</span>)}</p>
            <p>Manufacturer(s): {openfda.manufacturer_name.map((name, i) => <span key={i}>{name}</span>)}</p>
            {showMore?<DrugInfo drug={props.drug} />:''}
        </div>
    )
}

export default DrugHeader