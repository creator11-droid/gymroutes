import React from 'react'
import Header from '../../components/Header'
import jpg from '../../images/bigmac.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import{FaWhatsapp} from 'react-icons/fa'
import './contact.css'
const Contact = () => {
  return (
    <>
    <Header title='Get in touch' image={jpg}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eaque unde vero.
    </Header>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href='mailto:esietita@gmail.com' target='_blank' rel='noreferrer'><MdEmail/></a>
          <a href='https://messenger.com' target='_blank' rel='noreferrer'><BsMessenger/></a>
          <a href='https://whatsapp.com' target='_blank' rel='noreferrer'><FaWhatsapp/></a>
        </div>
      </div>

    </section>
    </>
  )
}

export default Contact