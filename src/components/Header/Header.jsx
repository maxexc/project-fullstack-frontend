import { HeaderBox } from './Header.styled';
import Logo from 'components/Logo';
import UserLogo from 'components/UserLogo';

const Header = () => {
  return (
    <HeaderBox>
      <Logo />
      <UserLogo />
    </HeaderBox>
  );
};

export default Header;
