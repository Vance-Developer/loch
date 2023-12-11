import React from 'react'
import "./Homepage.css"
import TopCard from './TopCard'
import MiddleCard from './MiddleCard'
import Testimonials from './Testimonials'

const Homepage = () => {
  return (
    <div className='home-page'>
      <div className='radient'>
      <TopCard />
      <br />
      <MiddleCard />
      <Testimonials />
      </div>
    </div>
  )
}

export default Homepage