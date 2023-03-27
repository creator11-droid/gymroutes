import React from 'react'
import { Link } from 'react-router-dom'
import Gym1 from '../images/gym1-transformed.png'
const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4> #60daysofworkout</h4>
          <h1>Join the legends of the fitness world</h1>
          <p>Get your body in shape and stay healthy with the strengthening of both body and mind. Let us help you get stronger everyday one rep at a time.</p>
        <Link to='/plans' className='btn lg'>Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Gym1} alt='main__i'/>
          </div>
        </div>
      </div>
      
    </header>
  )
}

export default MainHeader