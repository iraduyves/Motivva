import React from 'react'
import css from './style.module.css'

export default function Message({ message = '', emojies = [], sender: { profile }, replies = 0, mine }) {
    return (
        <div className={`${css.box} ${mine ? css.mine : ''}`}>
            <div className={css.message}>
                <img src={profile ? profile : "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?5315ffb"} />
                <p>{message}</p>
                <div className={css.footer}>
                    <div className={css.icons}>
                        {emojies.map(({ emoji, counts }) => (
                            <span>{emoji} {counts}</span>
                        ))}
                    </div>
                    <div className={css.icons}>
                        <span>💬 {replies}</span>

                    </div>
                </div>
            </div>
        </div>
    )
}

