import React from 'react'
import './styles/isLoading.css'

const IsLoading = ({ fullLoading }) => {
    return (
        <div className={`isLoading ${fullLoading && 'show-isLoading'}`}>
            <h1>{`<Alex /> .`}</h1>
        </div>
    )
}

export default IsLoading