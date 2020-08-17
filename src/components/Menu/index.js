import React from 'react';
import './Menu.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo/logo_DougFlix.png';
import Button from '../Button';

const Menu = () => (
  <nav className="Menu">
    <Link to="/">
      <img className="Logo" src={Logo} alt="DougFlix logo" />
    </Link>

    {/* O "as" faz com que o elemento se comporte como o referenciado */}
    <Button as={Link} className="" to="/cadastro/video">
      Novo vídeo
    </Button>
  </nav>
);

export default Menu;
