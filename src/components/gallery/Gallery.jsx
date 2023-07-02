import './_gallery.scss';
import datas from '../../data/logements.json';
import Card from '../card/Card';


export default function Gallery() {
    return (
        <div className='gallery'>
            {datas.map(data => {
                return (
                    <Card
                        key={ data.id } // Propriété "key" utilisée pour l'identification unique de chaque élément dans le rendu de la liste
                        id={ data.id }
                        title={ data.title }
                        cover={ data.cover }
                    />
                    /* Pour chaque donnée de logement, on crée un élément Card avec des propriétés spécifiques */
                )
            })}
        </div>
    )
}