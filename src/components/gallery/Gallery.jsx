import './_gallery.scss';
import datas from '../../data/logements.json';
import Card from '../card/Card';


export default function Gallery() {
    return (
        <div className='gallery'>
            {datas.map(data => {
                return (
                    <Card
                        key={ data.id } //pourquoi key ?
                        id={ data.id }
                        title={ data.title }
                        cover={ data.cover }
                    />
                )
            })}
        </div>
    )
}