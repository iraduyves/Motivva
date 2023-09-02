import React from 'react'
import AddIcon from '../../components/icons/add'

export default function InputMessage() {
    return (
        <div>
            <label htmlFor="">
                <AddIcon />
                <input type="text" />
            </label>
        </div>
    )
}
