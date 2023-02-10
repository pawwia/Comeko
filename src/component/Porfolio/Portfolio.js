import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft, faCircleChevronRight, faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import './Portfolio.css';

import Navi from '../Navi';
const Portfolio = (scrollPosition) => {
    useEffect(()=>{

        window.scrollTo(0, 0)
    
    },[])
    const galleryImages = [];
       
    for (let i = 1; i <= 178; i++) {
        galleryImages.push({
        img: require(`../../images/Portfolio/0 (${i}).webp`),
        alt: `Portfolio zdjęcie ${i}`,
      });
    }




        
        const [slideNumber, setSlideNumber]=useState(0);
        const [openModal, setOpenModal]=useState(false);
        const handleOpenModal=(index)=>{
setSlideNumber(index)
setOpenModal(true)

        }
        const handleCloseModal=()=>{
setOpenModal(false);

        }
    const prevSlide=()=>{
slideNumber===0
?setSlideNumber(galleryImages.length-1)
:setSlideNumber(slideNumber-1)
            
        }
        const nextSlide=()=>{
slideNumber+1===galleryImages.length?setSlideNumber(0):setSlideNumber(slideNumber+1)
            
        }
    
    return ( 
        <div id='Galeria'>
<Navi/>
<h1> Nasze realizacje </h1>
            {openModal&&
            <div className='sliderWrap'>
<FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleCloseModal}/>
<FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev' onClick={prevSlide}/>
<FontAwesomeIcon icon={faCircleChevronRight} className='btnNext' onClick={nextSlide}/>

<div className='fullScreenImage'>

    <img src={galleryImages[slideNumber].img}/> 
</div>
 
 

            </div>
            }
          
<div className='galleryWrap'>

{galleryImages&&galleryImages.map((slide, index) =>{
return(
<div 
className= {(index%1===0)?" single dwa":" single jeden"}
 key={index}
 onClick={()=>handleOpenModal(index)}
>
{/*<img src={slide.img} alt='' loading="lazy"/>*/}

<LazyLoadImage  responisve
           
            src={slide.img} />

    </div>

)

})}


</div>
</div>
     );
}
 
export default Portfolio;