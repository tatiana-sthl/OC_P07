import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner';
import Gallery from '../../components/gallery/Gallery';


export default function Home() {
    return (
        <div>
            <Header />
                <Banner />
                <Gallery />
            <Footer />
        </div>
    )
}