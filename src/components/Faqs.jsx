import React from 'react'
import SectionHeader from './SectionHeader'
import { faqs } from '../data'
import { FaQuestion } from 'react-icons/fa'
import Faq from './Faq'

const Faqs = () => {
  return (
    <section className='faqs'>
        <div className="container faqs__container">
            <SectionHeader icon={<FaQuestion/>} title='FAQs'/>
            <div className="faqs__wrapper">
                    {
                        faqs.map(({id, question, answer})=>{
                                return(
                                    <Faq key={id} question={question} answer={answer} />
                                )
                        })
                    }
            </div>
        </div>

    </section>
  )
}

export default Faqs