import React from 'react'
import gymbg from '../../images/gym3.jpg'
import Header from '../../components/Header'
import {price} from '../../data'
import Card from '../../UI/Card'
import './plans.css'
const Plans = () => {
  return (
   <>
   <Header image={gymbg} title='Membership Plans'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum obcaecati beatae sunt eius explicabo dolores quam non error!
   </Header>
   <section className="plans">
    <div className="container plans__container">
      {
        price.map(({id, description,name, price, features})=>{
          return(
                <Card key={id} className='plan'>
                  <h3>{name}</h3>
                  <small>{description}</small>
                  <h1>{`$${price}`}</h1><h2>/mo</h2>
                  <h4>Features</h4>
                  {
                    features.map(({feature, available}, index)=>{
                      return(
                        <p key={index} className={!available? 'disabled' : ''}>{feature}</p>
                      )
                    })
                  }
                  <button className='btn lg'>Choose Plan</button>
                </Card>
          )
        })
      }
    </div>
   </section>
   </>
  )
}

export default Plans