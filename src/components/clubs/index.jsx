import React, { useMemo, useState } from 'react'
import './style.css'
import Club from './one'

const Clubs = () => {
  const clubs = useMemo(() => Array.from(
    { length: 5},
    (_, index) => ({
      active: true,
      title: "Community Club",
      content: 'Join the motivated club to improve your communication skills'
    })
  ), [])
  console.log(clubs)
  return (
    <section className='cards_list'>
      {
        clubs.map(one => (
          <div key={one.title}>
            <Club title={one.title} content={one.content} active={one.active} />
          </div>
        ))
      }
    </section>
  )
}

export default Clubs