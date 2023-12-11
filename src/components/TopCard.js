import React from 'react'
import "./TopCard.css"

const TopCard = () => {
  return (
    <div className='parent-card'>
      <div className='left-card'>
        <img className='rotating-bell' src='/images/bell.png' alt='' />
        <p className='heading'>Get notified when a highly correlated whale makes a move</p>
        <p className='text-para'>Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.</p>
      </div>
      <div className='right-card'>
        <img src='/images/Card3.png' alt='' />
        <img src='/images/Card2.png' alt='' />
        <img src='/images/Card3.png' alt='' />
      </div>
    </div>
  )
}

export default TopCard