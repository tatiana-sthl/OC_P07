import './_card.scss';
import { Link } from 'react-router-dom';


export default function Card({ id, title, cover }) {
    return (
        <Link to={`/housing/${id}`} className='card'>
            <img src={ cover } alt={ title } />
            <h3>{ title }</h3>
        </Link>
    )
}