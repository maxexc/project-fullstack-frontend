import { useEffect, useState } from 'react';
import Logo from 'components/Logo';
import UserLogo from 'components/UserLogo';
import Navigation from 'components/Navigation';
import { HeaderBox } from './Header.styled';
import { HeaderContainer, BoxSwitch } from './Header.styled';
import BurgerButton from 'components/Burger/BurgerButton';
import SwitcherBtn from '../Burger/SwitcherBtn';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [scroll, setScroll] = useState(0);
  const [width, setWidth] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [locat, setlocat] = useState(null);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
    return () =>
      window.removeEventListener('resize', () => {
        setWidth(window.innerWidth);
      });
  }, [width]);

  const location = useLocation().pathname;

  const getLocation = () => {
    if (location === '/home ') {
      setlocat(true);
    }
  };
  getLocation();
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
    return () =>
      window.removeEventListener('scroll', () => setScroll(window.scrollY));
  }, []);
  return (
    <HeaderContainer scroll={scroll} id="header">
      <HeaderBox id="header-box">
        <Logo />
        <Navigation />
        <UserLogo />
        <BurgerButton />
        <BoxSwitch>
          <SwitcherBtn />
        </BoxSwitch>
      </HeaderBox>
    </HeaderContainer>
  );
};

export default Header;
