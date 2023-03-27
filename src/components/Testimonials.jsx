import React, { useState } from 'react'
import SectionHeader from './SectionHeader'
import {ImQuotesLeft} from 'react-icons/im'
import Card from '../UI/Card'
import {IoMdArrowDropleftCircle, IoMdArrowDroprightCircle} from 'react-icons/io'
import { testimonials } from '../data'

const Testimonials = () => {
    const [index, setIndex] = useState(1)
    const {name, quotes, job ,image} = testimonials[index];

    const prevTestimonialHandler =() =>{
         setIndex(prev=> prev -1)

            if(index <= 0){
                setIndex(testimonials.length-1)
            }
    }
     const nextTestimonialHandler =() =>{
            setIndex(prev=> prev +1)

            if(index>= testimonials.length-1){
                setIndex(0)
            }
    }

  return (
    <section className="testimonials">
        <div className="container testimonials__container">
            <SectionHeader icon={<ImQuotesLeft/>} title='Testimonials' className='testimonials__head'/>
            <Card className='testimonial'>
                <div className='testimonial__avatar'>
                <img src={image} alt={name}></img>
            </div>
            <p className='testimonial__quote'>{`"${quotes}"`}</p>
            <h5>{name}</h5>
            <small className='testimonial__title'>{job}</small>
            </Card>
            <div className="testimonials__btn-container">
                <div className="testimonial__btn" onClick={prevTestimonialHandler}><IoMdArrowDropleftCircle/></div>
                <div className="testimonial__btn" onClick={nextTestimonialHandler}><IoMdArrowDroprightCircle/></div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials