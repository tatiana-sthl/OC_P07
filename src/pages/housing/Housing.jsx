import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import data from '../../data/logements.json'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Carrousel from '../../components/carrousel/Carrousel';


export default function Housing() {

    const [slide, setSlide] = useState([])

    const idHousing = useParams('id').id
    const dataHousing = data.filter(data => data.id === idHousing)

    useEffect(() => {
		const dataHousing = data.filter(data => data.id === idHousing);
		setSlide(dataHousing[0].pictures);
	}, [idHousing]);

    // const name = dataHousing[0].host.name.split(' ');
    // const rating = dataHousing[0].rating;
    // const description = dataHousing[0].description;
    // const equipments = dataHousing[0].equipments;


    return (
        <div>
            <Header />
                <Carrousel slide={ slide }/>
            <Footer />
        </div>
    )
}