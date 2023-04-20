import operations from 'redux/users/auth-operations';

import { PopupWrapper } from './LogoutModal.styled';
import { PopupContain } from './LogoutModal.styled';
import { CrossBtn } from './LogoutModal.styled';
import { LogoutBtn } from './LogoutModal.styled';
import { CancelBtn } from './LogoutModal.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RxCross2 } from 'react-icons/rx';

const LogoutModal = ({
  openLogoutModal,
  closeByPress,
  closeOnClick,
  check,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('keydown', e => closeByPress(e));

    return () => window.removeEventListener('keydown', e => closeByPress(e));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {openLogoutModal === true && (
        <PopupWrapper onClick={e => check(e)}>
          <PopupContain>
            <p>Are you sure you want to log out?</p>
            <CrossBtn onClick={() => closeOnClick()}>
              <RxCross2 size={24} />
            </CrossBtn>
            <div>
              <LogoutBtn
                onClick={() => {
                  dispatch(operations.logOut());
                  document.body.style.overflow = '';
                }}
              >
                Logout
              </LogoutBtn>
              <CancelBtn onClick={() => closeOnClick()}>Cancel</CancelBtn>
            </div>
          </PopupContain>
        </PopupWrapper>
      )}
    </>
  );
};

export default LogoutModal;
