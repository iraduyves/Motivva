import React from 'react'
import "./navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Location } from 'react-router-dom'
import { faBuildingCircleExclamation, faCableCar, faIdCardClip, faLocationCrosshairs, faLock, faMessage, faSearch } from '@fortawesome/free-solid-svg-icons'
import profile from '../../assets/profile.png'
import profileyves from '../../assets/yves.jpg'
import SearchInput from './search'


const Navbar = () => {
  return (
    <React.Fragment>
      <div className="navbar">
        <div className="navbarcontainer">
          <div>
            <span className="logo">MOTIVV</span>
          </div>
          <div className="logoicon">
            <FontAwesomeIcon icon={faBuildingCircleExclamation} />
          </div>
        </div>
        <div className="navsearch">
          <SearchInput />
        </div>
        <div className="navitems">
          <div className="ring">
            <FontAwesomeIcon icon={faLock} />
          </div>
          <div className="message">
            <FontAwesomeIcon icon={faMessage} />
          </div>
          <div className="profile">
            <img src={profileyves} alt="" className="navprofile" />
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default Navbar
