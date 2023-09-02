import React from 'react'
import css from './style.module.css'

export default function Filters({ items = [] }) {
    return (
        <ul className={css.filter}>
            {
                items.map(one => (
                    <li key={one} className={css.item}>{one}</li>
                ))
            }
        </ul>
    )
}
