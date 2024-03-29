import React, { useState } from 'react'
import { AiOutlineMinus } from 'react-icons/ai'
import { AiOutlinePlus } from 'react-icons/ai'

const Faq = ({question, answer}) => {
    const [isAnswerShowing, SetIsAnswerShowing] = useState(false)
  return (
    <article className='faq' onClick={()=> SetIsAnswerShowing(prev => !prev)}>
            <div>
                <h4>{question}</h4>
                <button className='faq__icon'>
                   {isAnswerShowing? <AiOutlineMinus/> :<AiOutlinePlus/>}
                </button>
            </div>
           {isAnswerShowing && <p>{answer}</p>} 
    </article>
  )
}

export default Faq