import React from 'react'
import img9 from '../images/gym9.webp'
import SectionHeader from './SectionHeader'
import {GiCutDiamond} from 'react-icons/gi'
import { values } from '../data'
import Card from '../UI/Card'

const Values = () => {
  return (
    <section className='values'>
        <div className="container values__container">
            <div className="values-left">
                <div className="values-img">
                    <img src={img9} alt='gymbro'></img>
                </div>
            </div>
            <div className="values-right">
                <SectionHeader icon={<GiCutDiamond/> } title='Values'/>
                <p>Strenght does not come from physical capacity. It comes from indomitable will <small>-M. Gandhi</small></p>
                <div className="values__wrapper">
                    {
                        values.map(({id, icon, title, description})=>{
                                return(
                                    <Card className='values__value' key={id}>
                                        <span>{icon}</span>
                                        <h4>{title}</h4>
                                        <small>{description}</small>
                                    </Card>
                                )
                        })
                    }
                </div>
            </div>
        </div>

    </section>
  )
}

export default Values