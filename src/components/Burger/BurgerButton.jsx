import { useEffect, useState } from 'react';
import { BackdropMobileMenu, BurgerBtn, CrossIcon, Overlay } from './MobileMenu.styled';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import Logo from 'components/Logo/Logo';
import { Ul } from 'components/Navigation/Navigation.styled';
import SwitcherBtn from './SwitcherBtn';

import { RxCross1 } from 'react-icons/rx';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { AiOutlineSearch } from 'react-icons/ai';

const burgerRoot = document.getElementById('burger-root');

const BurgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const burgerBtn = document.getElementById('burger-btn');
    if (!burgerBtn) {
      return;
    }
    burgerBtn.addEventListener('click', () => {
      console.log('click');
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    });

    return burgerBtn.removeEventListener('click', () => setIsOpen(true));
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        setIsOpen(false);
      }
    });

    return window.removeEventListener('keydown', e => {
      if (e.code === 'Escape') {
        setIsOpen(false);
      }
    });
  });

  const clickToggle = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <BurgerBtn id="burger-btn">
        <HiOutlineMenuAlt2 size={32} />
      </BurgerBtn>
      {isOpen && createPortal(
        <Overlay >
          <BackdropMobileMenu>
            <div>
              <Logo onClick={clickToggle} />
              <CrossIcon onClick={clickToggle}>     
                  <RxCross1 size={22} />
              </CrossIcon>
            </div>
            <nav>
              <Ul>
                <li onClick={clickToggle}>
                  <NavLink to="/categories">Categories</NavLink>
                </li>
                <li onClick={clickToggle}>
                  <NavLink to="/add">Add recipes</NavLink>
                </li>
                <li onClick={clickToggle}>
                  <NavLink to="/my">My recipes</NavLink>
                </li>
                <li onClick={clickToggle}>
                  <NavLink to="/favorite">Favorites</NavLink>
                </li>
                <li onClick={clickToggle}>
                  <NavLink to="/shopping-list">Shopping list</NavLink>
                </li>
                <li onClick={clickToggle}>
                  <NavLink to="/search">
                    <AiOutlineSearch size={24} alt="search" />
                    <p>Search</p>
                  </NavLink>
                </li>
              </Ul>
              <SwitcherBtn />
            </nav>
          </BackdropMobileMenu>
        </Overlay>    
    , burgerRoot)}
    </>
  );
};

export default BurgerButton;
