import React from 'react'
import { useParams } from 'react-router-dom'
const Note = () => {
    const { id } = useParams()

    return (<>
        <p>{id}</p>
    </>)
}

export default Note