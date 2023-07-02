import './_carrousel.scss'
import ArrowRight from '../../assets/arrow_carousel_right.png'
import ArrowLeft from '../../assets/arrow_carousel_left.png'
import { useState } from 'react'


export default function Slide({ imageSlide }) {
    const [currentIndex, setCurrentIndex] = useState(0) 

    const nextSlide = () => {
        setCurrentIndex(currentIndex + 1)
        if(currentIndex === imageSlide.length - 1)
            setCurrentIndex(0)
    }

    const prevSlide = () => {
        setCurrentIndex(currentIndex - 1)
        if(currentIndex === 0)
            setCurrentIndex(imageSlide.length - 1)
    }

    return (
        <div className='carrousel'>
            <img src={ imageSlide[currentIndex] } alt="carrousel display" className='carrousel__img'/>

            { imageSlide.length > 1 && 
                <div>
                    <img 
                        className='carrousel__arrowRight' 
                        src={ ArrowRight } 
                        alt="show next slide" 
                        onClick={ nextSlide  }
                    />
                    <img 
                        className='carrousel__arrowLeft' 
                        src={ ArrowLeft }  
                        alt="show previous slide" 
                        onClick={ prevSlide }
                    />
                    <p className='carrousel__number'>{ currentIndex + 1 } / { imageSlide.length }</p>
                </div>
            } 
        </div>
    )
}