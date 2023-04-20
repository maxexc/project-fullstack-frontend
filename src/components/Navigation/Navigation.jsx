import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import getTheme from 'redux/theming/theme-selector';
import { Ul } from './Navigation.styled';
import { HeaderNav, SearchImg } from './Navigation.styled';

const Navigation = () => {
  const [scroll, setScroll] = useState(0);
  const [locate, setLocate] = useState(0);

  const target = useLocation().pathname.split('/')[1];
  const color = useSelector(getTheme);

  useEffect(() => {
    if (target === 'recipe') {
      return setLocate(1);
    }

    return setLocate(0);
  }, [target]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
    return () =>
      window.removeEventListener('scroll', () => setScroll(window.scrollY));
  }, []);

  return (
    <HeaderNav>
      <Ul scroll={scroll} locate={locate} color={color}>
        <li>
          <NavLink to="/categories">Categories</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add recipes</NavLink>
        </li>
        <li>
          <NavLink to="/my">My recipes</NavLink>
        </li>
        <li>
          <NavLink to="/favorite">Favorites</NavLink>
        </li>
        <li>
          <NavLink to="/shopping-list">Shopping list</NavLink>
        </li>
        <li>
          <NavLink to="/search">
            <SearchImg size={24} alt="search" />
            <p>Search</p>
          </NavLink>
        </li>
      </Ul>
    </HeaderNav>
  );
};

export default Navigation;
