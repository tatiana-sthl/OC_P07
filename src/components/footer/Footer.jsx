import Logo from '../../assets/logo_kasa_footer.png'
import './_footer.scss';


export default function Footer() {
    return (
        <div className='footer'>
            <div>
                <img src={ Logo } alt="logo Kasa en noir et blanc" className='footer__logo'/>
            </div>
            <div>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>

        </div>
    );
}

