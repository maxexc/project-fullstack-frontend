import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/users';
import { useLocation } from 'react-router-dom';

import { BtnWrapper, UserLogoBtn } from 'components/UserLogo/UserLogo.styled';
import UserLogoModal from 'components/UserLogoModal/UserLogoModal';
import { Modal } from '../Modal/Modal';
import { ImgAva, NameUser } from 'components/UserLogo/UserLogo.styled';
import getTheme from 'redux/theming/theme-selector';

import UserInfoModal from '../Modal/UserInfoModal/UserInfoModal';

const UserLogo = () => {
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [LogoModalOpen, setLogoModalOpen] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [locate, setLocate] = useState(0);

  const color = useSelector(getTheme);
  const name = useSelector(authSelectors.getUsername);
  const ava = useSelector(authSelectors.getAvatar);

  useEffect(() => {
    window.addEventListener(
      'keydown',
      e => e.keyCode === 27 && setPopupIsOpen(false)
    );

    return () =>
      window.removeEventListener(
        'keydown',
        e => e.keyCode === 27 && setPopupIsOpen(false)
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const target = useLocation().pathname.split('/')[1];

  useEffect(() => {
    if (target === 'recipe') {
      return setLocate(1);
    }
    if (target === 'home') {
      return setLocate(2);
    }

    return setLocate(0);
  }, [target]);

  const popupToggle = () => {
    setPopupIsOpen(prev => !prev);
  };

  const modalToggle = () => {
    setLogoModalOpen(prev => !prev);
    document.body.style.overflow = 'hidden';
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
    return () =>
      window.removeEventListener('scroll', () => setScroll(window.scrollY));
  }, []);

  return (
    <BtnWrapper>
      <UserLogoBtn onClick={e => popupToggle(e)}>
        <ImgAva src={ava} alt="avatar" />
        <NameUser scroll={scroll} color={color} locate={locate}>
          {name}
        </NameUser>
      </UserLogoBtn>

      <Modal
        children={
          <UserInfoModal
            open={LogoModalOpen}
            setLogoModalOpen={setLogoModalOpen}
          />
        }
      />

      <UserLogoModal
        isOpen={popupIsOpen}
        popupToggle={popupToggle}
        toggler={modalToggle}
      />
    </BtnWrapper>
  );
};

export default UserLogo;
