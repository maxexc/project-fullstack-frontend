import logo from '../../images/Header/logo.svg';

const Logo = () => {
  return (
    <>
      <a href="/So Yummy" aria-current="page">
        <img src={logo} alt="logo" width={40} height={40} />
      </a>
    </>
  );
};

export default Logo;
