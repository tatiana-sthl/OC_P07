import './_collapse.scss';
import arrow from '../../assets/arrow.png';
import { useState } from 'react';


export default function Collapse(props) {

    const [toggle, setToggle] = useState(false);

    return (
        <div className='collapse'>
            <h3 className='collapse__title' onClick={ () => setToggle(!toggle) }>
                { props.title }
                <img 
                    className={ toggle ? 'arrow arrow__up' : 'arrow arrow__down' }
                    src={ arrow }
                    alt='show content'
                />
            </h3>
            
            <div className={ toggle ? 'collapse__content' : 'collapse__content__hidden' }>
                {Array.isArray(props.content) ? props.content.map((item, index) => {
                    return (
                        <p key={index}>{item}</p>
                    )
                }) : props.content
                }
            </div>
        </div>
    )
}