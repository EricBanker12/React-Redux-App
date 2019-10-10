import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Input, Button, Row } from 'reactstrap'

import { searchActionCreator } from '../actions'

function SearchForm() {
    const dispatch = useDispatch()
    const { loading, error } = useSelector(({loading, error})=>({loading, error}))

    const [search, setSearch] = React.useState('')

    function submitHandler(e) {
        e.preventDefault()
        if (!loading) {
            dispatch(searchActionCreator(search))
        }
    }

    return (
        <Form className="col-sm-6 text-center mx-auto" onSubmit={submitHandler}>
            <h1>Drug Search</h1>
            <Row>
                <Input
                    className="col-10"
                    type='text'
                    placeholder='Search'
                    title='Search by drug brand name, generic name, or ingredient'
                    value={search}
                    onChange={e=>{setSearch(e.target.value)}}
                />
                <Button className="btn-info col-2">Search</Button>
            </Row>
        </Form>
    )
}

export default SearchForm