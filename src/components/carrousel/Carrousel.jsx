import './_carrousel.scss'
import ArrowRight from '../../assets/arrow_carousel_right.png'
import ArrowLeft from '../../assets/arrow_carousel_left.png'
import { useState } from 'react'


export default function Carrousel ({ slide }) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const length = slide.length;

    const nextSlide = () => {
        setCurrentIndex(currentIndex + 1)
        if (currentIndex === length - 1) {
            setCurrentIndex(0)
        }
    }

    const prevSlide = () => {
        setCurrentIndex(currentIndex - 1)
        if (currentIndex === 0) {
            setCurrentIndex(length - 1)
        }
    }

    return (
        <div className='carrousel'>

            { length > 1 &&
                <>
                    <img
                        src={ ArrowLeft }
                        alt="gauche"
                        onClick={ prevSlide }
                        className='carrousel__arrowLeft'
                    />

                    <img
                        src={ ArrowRight }
                        alt="droite"
                        onClick={ nextSlide }
                        className='carrousel__arrowRigth'
                    />

                    <p className='caroussel_number'>{ currentIndex + 1 } / { slide.length }</p>
                </>
            }

        </div>
    )

}