import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import datas from '../../data/logements.json'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Carrousel from '../../components/carrousel/Carrousel';
import Collapse from '../../components/collapse/Collapse';
import emptyStar from '../../assets/emptyStar.png';
import fullStar from '../../assets/fullStar.png';



export default function Housing() {
	
	const [imageSlide, setImageSlide] = useState([]);

	const idHousing = useParams('id').id;
	const dataCurrentHousing = datas.filter(data => data.id === idHousing);
	
	useEffect(() => {
		const dataCurrentHousing = datas.filter(data => data.id === idHousing);
		setImageSlide(dataCurrentHousing[0].pictures);
	}, [idHousing]);

	return (
		<>
			<Header/>
			<Carrousel imageSlide={imageSlide}/>	
			<div>
				<div>
					<div>
						<h1>{ dataCurrentHousing[0].title }</h1>
						<p>{ dataCurrentHousing[0].location }</p>

						{ dataCurrentHousing[0].tags.map((tag, index) => {
							return (
								<button key={ index }>{ tag }</button>
							)
						}) }
					</div>

					<div>
						<div>
							<p>{ dataCurrentHousing[0].host.name }</p>
							<img src={ dataCurrentHousing[0].host.picture } alt="" />
						</div>

						<div>
							{ [...Array(5)].map((star, index) => {
								const rateValue = index + 1;
								return (
									<img key={ index } src={ rateValue <= dataCurrentHousing[0].rating ? fullStar : emptyStar} alt="rate with star" />
								)
							})}
						</div>
					</div>

				</div>

				<div>
					<Collapse title={ 'Description' } content={ dataCurrentHousing[0].description }/>
					<Collapse title={ 'Equipements' } content={ dataCurrentHousing[0].equipments }/>
				</div>
			</div>	
			<Footer/>
		</>
	)
}