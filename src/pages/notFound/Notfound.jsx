import React from 'react'
import {Link} from 'react-router-dom'
import './notfound.css'
const Notfound = () => {
  return (
    <section>
      <div className="container notfound__container">
        <h2>Page not Found</h2>
        <Link to='/' className='btn'>Go back to homepage</Link>
      </div>
    </section>
  )
}

export default Notfound