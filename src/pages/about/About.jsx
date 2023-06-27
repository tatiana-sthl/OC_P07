import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import BannerAbout from '../../components/bannerAbout/BannerAbout';
import Collapse from '../../components/collapse/Collapse';
import datas from '../../data/collapses.json';


export default function About() {
    return (
        <div>
            <Header />
            <BannerAbout/>
            {datas.map(data => (
                <Collapse
                    key={ data.id }
                    title={ data.title }
                    content={ data.content }
                />
            ))}                           
            <Footer />
        </div>
    )
}