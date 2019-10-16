import React from 'react'
import { Card, CardHeader, CardBody } from 'reactstrap'

import DrugInfo from './DrugInfo'

function DrugHeader(props) {
    const { openfda } = props.drug
    const [showMore, setShowMore] = React.useState(false)

    if (!openfda || !openfda.brand_name) return <div></div>

    return (
        <Card className="mt-3" style={{cursor:'pointer'}} onClick={()=>{setShowMore(!showMore)}}>
            <CardHeader>
                <h4>{openfda.brand_name.map((name, i) => <span key={i}>{name}</span>)}</h4>
            </CardHeader>
            <CardBody>
                <p>Generic Name(s): {openfda.generic_name.map((name, i) => <span key={i}>{name}</span>)}</p>
                <p>Manufacturer(s): {openfda.manufacturer_name.map((name, i) => <span key={i}>{name}</span>)}</p>
                <p>Product Type: {openfda.product_type.map((name, i) => <span key={i}>{name}</span>)}</p>
                <p>Administration Route: {openfda.route.map((name, i) => <span key={i}>{name}</span>)}</p>
            </CardBody>
        </Card>
    )
}

export default DrugHeader