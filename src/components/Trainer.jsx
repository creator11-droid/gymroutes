import React from 'react'
import Card from '../UI/Card'

const Trainer = ({name, image, job, socials}) => {
  return (
   <Card className='trainer'>
    <div className="trainer__img">
      <img src={image} alt={name}></img>
    </div>
    <h3>{name}</h3>
    <p>{job}</p>
    <div className="trainer__socials">
      {
      socials.map(({link, icon}, index)=>{
        return(
          <a key={index} href={link} target='_blank' rel='noreferrer noopener'>{icon}</a>
        )
      })
      }
    </div>
   </Card>

  )
}

export default Trainer