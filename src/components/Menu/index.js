import React from 'react';
import { Link } from 'react-router-dom';
import LogoMain from '../../assets/img/LogoMainJohnBlue.png';
import './menu.css';
import Button from '../Button';
//import ButtonLink from '../components/ButtonLink';

function Menu(){
    return (
        <nav className="Menu">
            <Link to="/">
            <img className="Logo" src={LogoMain} alt="JohnFlix logo"/>
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;