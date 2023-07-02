import './_carrousel.scss'
import ArrowRight from '../../assets/arrow_carousel_right.png'
import ArrowLeft from '../../assets/arrow_carousel_left.png'
import { useState } from 'react'


export default function Slide({ imageSlide }) {
    // Déclaration d'une variable d'état currentIndex avec la valeur initiale de 0
  // et d'une fonction setCurrentIndex pour mettre à jour la valeur de currentIndex
    const [currentIndex, setCurrentIndex] = useState(0) 

    const nextSlide = () => {
        setCurrentIndex(currentIndex + 1)
        if(currentIndex === imageSlide.length - 1)
            setCurrentIndex(0) // Réinitialise currentIndex à 0 si on atteint la fin du carrousel
    }


    const prevSlide = () => {
        setCurrentIndex(currentIndex - 1)
        if(currentIndex === 0)
            setCurrentIndex(imageSlide.length - 1) // Déplace currentIndex à la fin du carrousel si on atteint le début
    }

    return (
        <div className='carrousel'>
            {/* Affichage de l'image correspondant à l'index actuel du carrousel */}
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
                    {/* Affichage du numéro de l'image actuelle sur le carrousel */}
                    <p className='carrousel__number'>{ currentIndex + 1 } / { imageSlide.length }</p>
                </div>
            } 
        </div>
    )
}