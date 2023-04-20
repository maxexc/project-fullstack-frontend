import { HiOutlinePencil } from 'react-icons/hi';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';
import { UserLogoPopup } from './UserLogoModal.styled';
import LogoutModal from 'components/LogoutModal/LogoutModal';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';

const UserLogoModal = ({ isOpen, popupToggle, toggler }) => {
  const [openLogoutModal, setLogoutModal] = useState(false);

  const openModal = () => {
    setLogoutModal(true);
    document.body.style.overflow = 'hidden';
    popupToggle();
  };

  const closeByPress = e => {
    if (e.keyCode === 27) {
      document.body.style.overflow = '';
      setLogoutModal(false);
    }
  };

  const closeOnClick = () => {
    setLogoutModal(false);
    document.body.style.overflow = '';
  };

  const check = e => {
    if (e.currentTarget === e.target) {
      setLogoutModal(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <>
      {isOpen === true && (
        <UserLogoPopup>
          <div>
            <button
              id="open-modal-button"
              onClick={() => {
                toggler();
                popupToggle();
              }}
            >
              Edit profile <HiOutlinePencil size={14} />
            </button>
            <LogoutBtn onClick={() => openModal()} />
          </div>
        </UserLogoPopup>
      )}
      <Modal
        children={
          <LogoutModal
            check={check}
            closeOnClick={closeOnClick}
            closeByPress={closeByPress}
            openLogoutModal={openLogoutModal}
          />
        }
      />
    </>
  );
};

export default UserLogoModal;
