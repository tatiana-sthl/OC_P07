import BannerAbout from '../../assets/bannerAbout.png';
import '../banner/_banner.scss';


export default function Bannerabout() {
    return (
        <div className="banner">
            <img className="banner__img" src={BannerAbout} alt="Bannière d'accueil" />
        </div>
    )
}
