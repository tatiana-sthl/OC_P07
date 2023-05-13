import BannerHome from '../../assets/bannerHome.png'
import './_banner.scss';


export default function Banner() {
    return (
        <div className="banner">
            <img className="banner__img" src={ BannerHome } alt="Bannière d'accueil" />
            <p className="banner__txt">Chez vous, partout et ailleurs</p>
        </div>
    )
}
