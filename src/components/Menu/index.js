import React from 'react';
import './Menu.scss'
import Logo from '../../assets/logo/logo_DougFlix.png';
import ButtonLink from './components/ButtonLink';
import Button from '../Button'

const Menu = () => {
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="DougFlix logo"/>
            </a>

            <Button as="a" className="" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;