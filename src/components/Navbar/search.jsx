import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useId } from 'react'

function SearchInput() {
    const id = useId()

    return (
        <label className="navsearchitem" htmlFor={id}>
            <FontAwesomeIcon className="navicon" icon={faSearch} />
            <input
                id={id}
                type="text"
                className="navsearchinput"
                placeholder="club" />
        </label>
    )
}

export default SearchInput