import { NavLink } from 'react-router-dom';
import logo from '../../images/Header/logo.svg';
import { LogoSvg } from './Logo.styled';

const Logo = ({ onClick }) => {
  return (
    <LogoSvg onClick={onClick}>
      <NavLink to="/home" aria-current="page">
        <img src={logo} alt="logo" width={40} height={40} />
      </NavLink>
    </LogoSvg>
  );
};

export default Logo;
