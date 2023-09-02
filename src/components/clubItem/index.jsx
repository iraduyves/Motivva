import React from 'react'
import css from './style.module.css'
import GroupIcon from '../icons/group'
import Verified from '../icons/verified'

function ClubItem({
    title = '',
    image = '',
    leader: { name = '', profile = '' },
    members = 0
}) {
    return (
        <div className={css.card}>
            <img className={css.img} alt={title} src={image} />
            <div className={css.info}>
                <aside className={css.main_info}>
                    <h3>{title}</h3>
                    <small>{name}</small>
                </aside>
                <img src={profile} alt={name} />
                <div className={css.member_info}>
                    <h4>Members</h4>
                    <p>
                        <GroupIcon />
                        <b>{members}</b>
                    </p>
                </div>
                <div className={css.badge}>
                    <small>badge</small>
                    <Verified />
                </div>
            </div>
        </div>
    )
}

export default ClubItem