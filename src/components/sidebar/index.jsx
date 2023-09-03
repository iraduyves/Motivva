import React from 'react'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import profile from '../../assets/profile.png'
import profileyves from '../../assets/yves.jpg'
import profile1 from '../../assets/profilegirl.jpg'
import profile2 from '../../assets/profilegirl2.jpg'
import profile3 from '../../assets/profilegirl3.jpg'
import profile4 from '../../assets/profiledevido.jpg'

function SideBar() {
    return (
        <nav className="sidebar">
            <ul className="recentclubs">
                <li>
                    <img src={profileyves} alt="" className="profile" />
                </li>
                <li>
                    <img src={profile1} alt="" className="profile" />
                </li>
                <li>
                    <img src={profile2} alt="" className="profile" />
                </li>
                <li>
                    <img src={profile3} alt="" className="profile" />
                </li>
                <li>
                    <img src={profile4} alt="" className="profile" />
                </li>
                <li>
                    <FontAwesomeIcon className="sideicon" icon={faAdd} />
                </li>
            </ul>
        </nav>
    )
}

export default SideBar