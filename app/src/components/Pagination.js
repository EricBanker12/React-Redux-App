import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'reactstrap'

import { queryActionCreator } from '../actions'

function Pagination(props) {
    const { query, data } = useSelector(({query, data})=>({query, data}))
    const dispatch = useDispatch()

    function previousPage() {
        const skip = data.meta.results.skip
        const limit = data.meta.results.limit
        dispatch(queryActionCreator(query.replace(/skip=\d+/i,`skip=${skip-limit}`)))
    }
    
    function nextPage() {
        const skip = data.meta.results.skip
        const limit = data.meta.results.limit
        dispatch(queryActionCreator(query.replace(/skip=\d+/i,`skip=${skip+limit}`)))
    }

    return (
        <div className='d-flex justify-content-between' >
            <Button
                className='btn-info my-3'
                disabled={!data.meta || data.meta.results.skip === 0}
                onClick={previousPage}
            >
                Previous Page
            </Button>
            <Button
                className='btn-info my-3'
                disabled={!data.meta || data.meta.results.total - data.meta.results.skip <= data.meta.results.limit}
                onClick={nextPage}
            >
                Next Page
            </Button>
        </div>
    )
}

export default Pagination