import { Logout } from './LogoutBtn.styled';
import arrow from '../../images/Header/arrow.svg';

const LogoutBtn = ({ onClick }) => {
  return (
    <Logout id="close-modal-btn" onClick={() => onClick()}>
      Logout <img src={arrow} alt="pen" />
    </Logout>
  );
};

export default LogoutBtn;
