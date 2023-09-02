import React, { useId } from 'react'
import css from './style.module.css'

export function AccodionItem({ children }) {
    return (
        <div className={css.item}>{children}</div>
    )
}

export default function Accodions({ title = '', children }) {
    const id = useId()

    return (
        <div className={css.accodions}>
            <input id={id} type='checkbox' />
            <label className={css.title} htmlFor={id}>{title}</label>
            <div className={css.items}>
                {children}
            </div>
        </div>
    )
}
