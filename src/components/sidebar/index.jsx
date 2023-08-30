import React from 'react'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import profile from '../../assets/profile.png'

function SideBar() {
    return (
        <nav className="sidebar">
            <ul className="recentclubs">
                <li>
                    <img src={profile} alt="" className="profile" />
                </li>
                <li>
                    <img src={profile} alt="" className="profile" />
                </li>
                <li>
                    <img src={profile} alt="" className="profile" />
                </li>
                <li>
                    <img src={profile} alt="" className="profile" />
                </li>
                <li>
                    <img src={profile} alt="" className="profile" />
                </li>
                <li>
                    <FontAwesomeIcon className="sideicon" icon={faAdd} />
                </li>
            </ul>
        </nav>
    )
}

export default SideBar