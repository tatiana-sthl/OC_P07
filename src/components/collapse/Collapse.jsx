import './_collapse.scss';
import arrow from '../../assets/arrow.png';
import { useState } from 'react';


export default function Collapse(props) {

    const [toggle, setToggle] = useState(false);

    return (
        <div className='collapse'>
            {/* Titre du collapsible, en cliquant dessus, on inverse la valeur de toggle  */}
            <h3 className='collapse__title' onClick={ () => setToggle(!toggle) }>
                { props.title }
                <img 
                    className={ toggle ? 'arrow arrow__up' : 'arrow arrow__down' }
                    src={ arrow }
                    alt='show content'
                />
            </h3>

             {/* Contenu du collapsible, sa classe CSS dépend de la valeur de toggle */}
            <div className={ toggle ? 'collapse__content' : 'collapse__content__hidden' }>
                {Array.isArray(props.content) ? props.content.map((item, index) => {
                    return (
                        // Si le contenu est un tableau, on le parcourt et on affiche chaque élément dans un paragraphe
                        <p key={index}>{item}</p>
                    )
                    /* Si le contenu n'est pas un tableau, on l'affiche directement */
                }) : props.content 
                }
            </div>
        </div>
    )
}