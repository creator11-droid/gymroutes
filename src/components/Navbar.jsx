
import {Link, NavLink} from 'react-router-dom'
import React, { useState } from 'react'
import { links } from '../data'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import logo from '../images/logo.png'
import './navbar.css'

const Navbar = () => {
  const [ isNavShowing, setIsNavShowing] = useState (false)
  return (
   <nav>
    <div className="container nav__container">
      <Link to= '/' className='logo' onClick={()=> setIsNavShowing(false)}>
          <img src={logo} alt='Nav_logo'/>
      </Link>
      <ul className= {`Nav__link ${isNavShowing ? 'show_nav' : 'hide_nav'}`}>
          {
            links.map(({name, path}, index)=>{
                  return (
                    <li key={index}>
                      <NavLink to={path} className={({isActive})=> isActive ? 'active-nav' : '' } onClick ={()=>{setIsNavShowing(prev => !prev)}}>{name}</NavLink>
                    </li>
                  )
            })
          }
      </ul>
      <button className='nav_toggle-btn' onClick ={()=>{setIsNavShowing(prev => !prev)}}>
            {isNavShowing ? <AiOutlineClose/> : <FaBars />}  
      </button>

    </div>
   </nav>
  )
}

export default Navbar