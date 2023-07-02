import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import datas from "../../data/logements.json";
import Carrousel from "../../components/carrousel/Carrousel";
import Collapse from "../../components/collapse/Collapse";
import emptyStar from "../../assets/emptyStar.png";
import fullStar from "../../assets/fullStar.png";
import './_housingContent.scss';

export default function HousingContent() {
  const [imageSlide, setImageSlide] = useState([]); // État pour stocker les images de la galerie
  const { id } = useParams(); // Récupération du paramètre d'URL "id" à l'aide du hook useParams()
  const dataCurrentHousing = datas.find((data) => data.id === id); // Recherche des données du logement actuel

  // Effet de côté pour mettre à jour les images de la galerie en fonction de l'ID du logement actuel
  useEffect(() => {
    const dataCurrentHousing = datas.find((data) => data.id === id);
    if (dataCurrentHousing) {
      setImageSlide(dataCurrentHousing.pictures);
    }
  }, [id]);

  // Si les données du logement actuel n'existent pas, rediriger vers la page "/404" avec le composant Navigate de react-router-dom
  if (!dataCurrentHousing) {
    return <Navigate to="/404" />;
  }

  // Extraction des propriétés du logement actuel
  const { title, location, tags, host, rating, description, equipments } = dataCurrentHousing;

  return (
    /* Fragment React pour englober les éléments adjacents sans utiliser d'élément DOM supplémentaire */
    <>
      <Carrousel imageSlide={imageSlide} />
      <main>
        <div className="housing">
          <div className="housing__infos">
            <h1 className="housing__infos__h1">{title}</h1>
            <p>{location}</p>

            {/* Parcours des tags du logement */}
            {tags.map((tag, index) => (
              <button className="housing__infos__buttons" key={index}>{tag}</button>
            ))}
          </div>

          <div className="housing__infos2">
            <div className="housing__host">
              <p className="housing__host__p">{host.name}</p>
              <img className="housing__host__img" src={host.picture} alt="" />
            </div>

            <div className="housing__rate">
              {[...Array(5)].map((_, index) => {
                // Parcours d'un tableau de 5 éléments
                const rateValue = index + 1;
                return (
                  // Affichage d'une étoile pleine ou vide en fonction de la note du logement
                  <img
                    className="housing__rate__star"
                    key={index}
                    src={rateValue <= rating ? fullStar : emptyStar}
                    alt="rate with star"
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="housing__collapse">
          <div className="housing__collapse__description">
            <Collapse title={"Description"} content={description} />
          </div>

          <div className="housing__collapse__equipments">
            <Collapse title={"Equipements"} content={equipments} />
          </div>
        </div>
      </main>
    </>
  );
}
