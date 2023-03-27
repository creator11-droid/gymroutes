import React from 'react'
import Header from '../../components/Header'
import bgimg from '../../images/bg.jpg'
import talk from '../../images/story.jpg'
import story from '../../images/talk.jpg'
import about from '../../images/about.jpg'
import './about.css'
const About = () => {
  return (
    <>
    <Header title='About us' image={bgimg} >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi at dolorum.
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={talk} alt=''></img>
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ducimus voluptate rem beatae voluptatibus voluptatum ratione, excepturi nemo vel ea dolores, quia dolor debitis fuga deleniti, vero velit quidem. Totam tempora ab omnis, quibusdam fuga neque veritatis non assumenda ipsum?
          
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, modi, quam quaerat aut dolor sit dignissimos dolore rem, sed sapiente ut vero eius dicta ab?</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur explicabo nam odit illo facere dolores.</p>
        </div>
      </div>
    </section>
    <section className="about__vision">
      <div className="container about__vision-container">
        
        <div className="about__section-content">
          <h1>Our vision</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ducimus voluptate rem beatae voluptatibus voluptatum ratione, excepturi nemo vel ea dolores, quia dolor debitis fuga deleniti, vero velit quidem. Totam tempora ab omnis, quibusdam fuga neque veritatis non assumenda ipsum?
          
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, modi, quam quaerat aut dolor sit dignissimos dolore rem, sed sapiente ut vero eius dicta ab?</p>
    
        </div>
        <div className="about__section-image">
          <img src={story} alt=''></img>
        </div>
      </div>
    </section>
    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={about} alt=''></img>
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ducimus voluptate rem beatae voluptatibus voluptatum ratione, excepturi nemo vel ea dolores, quia dolor debitis fuga deleniti, vero velit quidem. Totam tempora ab omnis, quibusdam fuga neque veritatis non assumenda ipsum?
          
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, modi, quam quaerat aut dolor sit dignissimos dolore rem, sed sapiente ut vero eius dicta ab?</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur explicabo nam odit illo facere dolores.</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About