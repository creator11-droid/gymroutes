import React from 'react'
import IRT from '../../images/olddude.jpg'
import Header from '../../components/Header'
import './gallery.css'
const Gallery = () => {
   const galleryLength=12;
   const galleryImages = [];
   for(let i = 1; i<= galleryLength; i++){
    galleryImages.push(require(`../../images/equipment${i}.jpg`))
   }
  return (
   
 <>
 <Header title="Our Gallery" image={IRT}>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, facilis quis. Ex facilis molestias cumque et.
 </Header>
 <section className="gallery">
  <div className="container gallery__container">
    {
      galleryImages.map((image, index)=>{
        return(
          <article key={index}>
            <img src={image} alt={`images${index+1}`}></img>
          </article>
        )
      })
    }
  </div>
 </section>
 </>
  )
}

export default Gallery