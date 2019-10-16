import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'

function Disclaimer(props) {
    const [open, setOpen] = React.useState(true)

    return (
        <Modal isOpen={open}>
            <ModalHeader>
                Disclaimer
            </ModalHeader>
            <ModalBody>
                <p>This application uses the openFDA drug label API. By using this application, you agree to the openFDA disclaimer and Terms of Service.</p>
                <blockquote>
                    "Do not rely on openFDA to make decisions regarding medical care.
                    Always speak to your health provider about the risks and benefits of FDA-regulated products.
                    We may limit or otherwise restrict your access to the API in line with our <a href='https://open.fda.gov/terms/'>Terms of Service</a>"
                </blockquote>
            </ModalBody>
            <ModalFooter>
                <Button className='btn-info' onClick={()=>{setOpen(false)}}>Accept</Button>
            </ModalFooter>
        </Modal>
    )
}

export default Disclaimer