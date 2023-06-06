import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import datas from "../../data/logements.json";
import Carrousel from "../../components/carrousel/Carrousel";
import Collapse from "../../components/collapse/Collapse";
import emptyStar from "../../assets/emptyStar.png";
import fullStar from "../../assets/fullStar.png";
import './_housingContent.scss';


export default function HousingContent() {
  const [imageSlide, setImageSlide] = useState([]);
  const idHousing = useParams().id;
  const dataCurrentHousing = datas.filter((data) => data.id === idHousing);

  useEffect(() => {
    const dataCurrentHousing = datas.filter((data) => data.id === idHousing);
    setImageSlide(dataCurrentHousing[0].pictures);
  }, [idHousing]);

  return (
    <>
      <Carrousel imageSlide={ imageSlide } />
      <main>
        <div className="housing">
          <div className="housing__infos">
            <h1 className="housing__infos__h1">{ dataCurrentHousing[0].title }</h1>
            <p>{ dataCurrentHousing[0].location }</p>

            { dataCurrentHousing[0].tags.map((tag, index) => {
              return <button className="housing__infos__buttons" key={ index }>{ tag }</button>;
            }) }
          </div>

          <div className="housing__infos2">
            <div className="housing__host">
              <p className="housing__host__p">{ dataCurrentHousing[0].host.name }</p>
              <img className="housing__host__img" src={ dataCurrentHousing[0].host.picture } alt="" />
            </div>

            <div className="housing__rate">
              { [...Array(5)].map((star, index) => {
                const rateValue = index + 1;
                return (
                  <img className="housing__rate__star"
                    key={ index }
                    src={ rateValue <= dataCurrentHousing[0].rating ? fullStar : emptyStar }
                    alt="rate with star"
                  />
                );
              }) }
            </div>
          </div>
        </div>

        <div className="housing__collapse">
            <div className="housing__collapse__description">
                <Collapse title={ "Description" } content={ dataCurrentHousing[0].description } />
            </div>

            <div className="housing__collapse__equipments">
                <Collapse title={ "Equipements" } content={ dataCurrentHousing[0].equipments } />
            </div>
        </div>
      </main>
    </>
  );
}
