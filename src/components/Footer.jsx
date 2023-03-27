import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import{FaFacebookF, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to='/' className='logo'>
                    <img src={logo} alt='footer__logo'></img>
                </Link>
                <p>
                   Connect to us on our socials.
                </p>
                <div className='footer__socials'>
                    <a href='https://linkedin.com' target={'_blank'} rel='noreferrer'><FaLinkedin/></a>
                    <a href='https://facebook.com' target={'_blank'} rel='noreferrer'><FaFacebookF/></a>
                    <a href='https://instagram.com' target={'_blank'} rel='noreferrer'><FaInstagram/></a>
                    <a href='https://twitter.com' target={'_blank'} rel='noreferrer'><FaTwitter/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to='about'>About</Link>
                <Link to='plans'>Plans</Link>
                <Link to='trainers'>Trainers</Link>
                <Link to='gallery'>Gallery</Link>
                <Link to='contact'>Contacts</Link>
            </article>
            
            <article>
                <h4>Insights</h4>
                <Link to='/$'>Blog</Link>
                <Link to='/$'>Case Studies</Link>
                <Link to='/$'>Event</Link>
                <Link to='/$'>Community</Link>
                <Link to='/$'>FAQS</Link>
            </article>
            <article>
                <h4>Get in touch</h4>
                <Link to='contact'>Contacts</Link>
                <Link to='/$'>Support</Link>
                
            </article>
        </div>
        <div className="footer__copyright">
            <small>2023 CREATOR &copy; all rights reserved</small>
        </div>
    </footer>
  )
}

export default Footer