import React from 'react'
import { Modal, ModalBody, Button } from 'reactstrap'

function DrugInfo({ drug, showMore, setShowMore }) {
    const { openfda } = drug

    return (
        <Modal isOpen={showMore}>
            <div class="modal-header">
                <h5 class="modal-title">{openfda.brand_name.map((name, i) => <span key={i}>{name}</span>)}</h5>
                <Button
                    className='btn-danger btn-sm float-right'
                    onClick={()=>{setShowMore(false)}}
                >
                    X
                </Button>
            </div>
            <ModalBody>
                <p>Generic Name(s): {openfda.generic_name.map((name, i) => <span key={i}>{name}</span>)}</p>
                <p>Manufacturer(s): {openfda.manufacturer_name.map((name, i) => <span key={i}>{name}</span>)}</p>
                <p>Product Type: {openfda.product_type.map((name, i) => <span key={i}>{name}</span>)}</p>
                <p>Administration Route: {openfda.route.map((name, i) => <span key={i}>{name}</span>)}</p>
            </ModalBody>
        </Modal>
    )
}

export default DrugInfo