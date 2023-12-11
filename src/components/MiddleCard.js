import React from 'react'
import "./MiddleCard.css"

const Cards = () => {
  return (
    <div className='parent-card-middle'>
      <div className='left-card-middle'>
        <img src='/images/left-image.png' alt='' />
      </div>
      <div className='right-card-middle'>
        <img src='/images/Eye.png' alt='' />
        <p className='heading'>Watch what the whales are doing</p>
        <p className='text-para'>All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing..</p>
      </div>
    </div>
  )
}

export default Cards