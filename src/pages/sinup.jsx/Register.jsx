import React from 'react'
import './register.css'
import defaultcard from '../../assets/defaultCard.jpg'

const sinnup = () => {
  return (
    <div className='container'>
        <div className="regform">
           <h1 className="regheader">Motivva</h1>
           <h2 className="sinupheader">Sign Up</h2>
           <form action="">
            <div className="user-details">
               <div className="input-box">
                 <span className="details" placeholder='firstname'>FirstName</span>
                 <input type="text" />
               </div>
               <div className="input-box">
                 <span className="details" placeholder='lastname'>LastName</span>
                 <input type="text" />
               </div>
               <div className="input-box">
                 <span className="details" placeholder='Username'>UserName</span>
                 <input type="text" />
               </div>
               <div className="input-box">
                 <span className="details" placeholder='Email'>email</span>
                 <input type="email" />
               </div>
               <div className="input-box">
                 <span className="details" placeholder='password'>Password</span>
                 <input type="password" />
               </div>
            </div>
           </form>
           
        </div>
        <div className="pic">
            <img src={defaultcard} alt="" className="regpic" />
        </div>

    </div>
  )
}

export default sinnup