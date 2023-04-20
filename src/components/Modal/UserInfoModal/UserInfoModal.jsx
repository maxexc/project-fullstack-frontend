import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { authSelectors } from 'redux/users';
import { authOperations } from 'redux/users';
import {
  Overlay,
  UserIModal,
  PenSvg,
  SaveBtn,
  NameInput,
  CloseCross,
  UploadedImg,
  PlusSvg,
  AddImgInput,
  UserSvg,
} from './UserModal.styled';

import { RxCross1 } from 'react-icons/rx';
import plus from '../../../images/Header/plus.svg';
import pen from '../../../images/Header/pen.svg';
import user from '../../../images/Header/user.png';

const UserInfoModal = ({ setLogoModalOpen, open }) => {
  const [image, setImg] = useState(null);
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState(null);

  const dispatch = useDispatch();

  const username = useSelector(authSelectors.getUsername);
  const ava = useSelector(authSelectors.getAvatar);

  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.keyCode === 27) {
        document.body.style.overflow = '';
        setLogoModalOpen(false);
      }
    });

    return () =>
      window.removeEventListener('keydown', e => {
        if (e.keyCode === 27) setLogoModalOpen(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUploadClick = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = function () {
        setImg(reader.result);
        setAvatar(file);
      };
    }
  };

  const onInputChange = e => {
    setName(e.target.value);
    localStorage.setItem('name', e.target.value);
  };

  const getName = localStorage.getItem('name');

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('img', avatar);
    formData.append('username', name);

    dispatch(authOperations.updateUserData(formData));
    if (image !== ava || username !== name) {
      setLogoModalOpen(false);
      document.body.style.overflow = '';
    }
  };

  const check = e => {
    if (e.currentTarget === e.target) {
      document.body.style.overflow = '';
      setLogoModalOpen(false);
    }
  };

  return (
    <Overlay
      open={open}
      id="user-info-modal"
      onClick={e => check(e)}
      onSubmit={handleSubmit}
    >
      <UserIModal>
        <CloseCross
          onClick={e => {
            e.preventDefault();
            setLogoModalOpen(false);
            document.body.style.overflow = '';
          }}
        >
          <RxCross1 size={24} />
        </CloseCross>
        <div>
          <UploadedImg src={image ? image : ava} alt="user" />

          <AddImgInput htmlFor="upload">
            <input
              style={{ display: 'none' }}
              name="picture"
              type="file"
              accept="image/*"
              id="upload"
              onChange={handleUploadClick}
            />
          </AddImgInput>
        </div>
        <PlusSvg src={plus} alt="plus" />
        <NameInput
          onInput={onInputChange}
          type="text"
          name="name"
          max={15}
          value={getName}
          placeholder={username}
          maxLength={15}
        />
        <UserSvg src={user} alt="user" />
        <PenSvg src={pen} alt="pen" />
        <SaveBtn type="submit">Save Changes</SaveBtn>
      </UserIModal>
    </Overlay>
  );
};

export default UserInfoModal;
