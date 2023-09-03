import React from 'react'
import default_back from '../../assets/defaultCard.jpg'
import default_back1 from '../../assets/backgroundphoto.png'
import profile from '../../assets/profile.png'
import profileyves from '../../assets/yves.jpg'
// import profile1 from '../../assets/profilegirl.jpg'
// import profile2 from '../../assets/profilegirl2.jpg'
// import profile3 from '../../assets/profilegirl3.jpg'
// import profile4 from '../../assets/profiledevido.jpg'

const Club = ({ active, title = 'Title', content = '' }) => {
    return (
        <div className={`club ${active ? 'active' : ''}`}>
            <div className='club_up' style={{ backgroundImage: `url(${default_back1})` }}>
                <div className='content'>
                    <h2>{title}</h2>
                    <p>{content}</p>
                    <div className='nestedProfiles'>
                        {
                            Array.from({ length: 4 }, () => profileyves).map((one, index) => (
                                <div className='profile_img' key={`${one}${index}`}>
                                    <img src={one} alt='profile' className='profile' />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='join_card'>
                <img src={default_back} />
                <button>Join Club</button>
            </div>
            <div className='club_down'>
                <div >
                    <small>MEMBER</small>
                    <p>5,970</p>
                </div>
                <div >
                    <small>MEMBER</small>
                    <p>5,970</p>
                </div>
                <div >
                    <small>MEMBER</small>
                    <p>5,970</p>
                </div>
            </div>
        </div>
    )
}

export default Club