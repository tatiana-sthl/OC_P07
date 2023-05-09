import Logo from '../../assets/logo_kasa.svg'
import { NavLink } from 'react-router-dom';
import './_header.scss';

export default function Header() {
    return (
        <nav className='navbar'>
            <NavLink to="/">
                <div className='navbar__logo'>
                    <img src={ Logo } alt="Logo Kasa" />
                </div>
            </NavLink>
            <NavLink to="/">
                <div>
                    <p>Accueil</p>                
                </div>
            </NavLink>
            <NavLink to="/about">
                <div>
                    <p>A propos</p>                
                </div>
            </NavLink>
        </nav>
    );
}

