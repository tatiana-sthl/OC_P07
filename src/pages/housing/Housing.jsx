import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import datas from '../../data/logements.json'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Carrousel from '../../components/carrousel/Carrousel';


export default function Accomodation() {
	
	const [imageSlide, setImageSlide] = useState([]);

	const idAccomodation = useParams('id').id;
	
	useEffect(() => {
		const dataCurrentAccomodation = datas.filter(data => data.id === idAccomodation);
		setImageSlide(dataCurrentAccomodation[0].pictures);
	}, [idAccomodation]);

	return (
		<>
			<Header/>
			<Carrousel imageSlide={imageSlide}/>		
			<Footer/>
		</>
	)
}