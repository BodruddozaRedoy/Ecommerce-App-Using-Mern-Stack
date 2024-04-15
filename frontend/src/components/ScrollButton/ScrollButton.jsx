import React from 'react'
import './ScrollButton.css'
import arrow_icon from '../Assets/arrow.png'

const ScrollButton = () => {
  return (
    <div onClick={window.scrollTo({top: 0, behavior: 'smooth'})} className='scrollbutton'>
      <img src={arrow_icon} alt="" />
    </div>
  )
}

export default ScrollButton
