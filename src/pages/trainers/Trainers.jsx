import React from 'react'
import Header from '../../components/Header'
import Bulk from '../../images/gym8.jpg'
import { trainers } from '../../data'
import {FaWhatsapp, FaInstagram, FaLinkedin, FaFacebook, FaTwitter} from 'react-icons/fa'
import Trainer from '../../components/Trainer'
import './trainers.css'
function Trainers() {
  return (
    <>
    <Header title='Trainers' image={Bulk}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus corporis aut laudantium aliquid velit quos eveniet error molestiae repellendus.
    </Header>
    <section className="trainers">
      <div className="container trainers__container">
        {
          trainers.map(({id, name, job, socials, image}) => {
            return(
           <Trainer key={id} name={name} job={job} image={image} socials={[
            {icon: <FaLinkedin/>, limk:socials[0] },
            {icon: <FaFacebook/>, limk:socials[1] },
            {icon: <FaWhatsapp/>, limk:socials[2] },
            {icon: <FaInstagram/>, limk:socials[3] },
            {icon: <FaTwitter/>, limk:socials[4] },
           ]} />)

          
          })
        }
      </div>
    </section>
    </>
  )
}

export default Trainers