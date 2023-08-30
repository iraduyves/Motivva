import React from 'react'
import default_back from '../../assets/defaultCard.jpg'
import profile from '../../assets/profile.png'

const Club = ({ active, title = 'Title', content = '' }) => {
    return (
        <div className={`club ${active ? 'active' : ''}`}>
            <div className='club_up' style={{ backgroundImage: `url(${default_back})` }}>
                <div className='content'>
                    <h2>{title}</h2>
                    <p>{content}</p>
                    <div className='nestedProfiles'>
                        {
                            Array.from({ length: 4 }, () => profile).map((one, index) => (
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