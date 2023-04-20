import { useSelector } from 'react-redux';
import {
  Title,
  BackgroundTopOne,
  BackgroundTopBlack,
  BackgroundTop,
  ContaynerTitle,
} from './MainPageTitle.styled';
import img from '../../images/background/green-point.png';
import imgTop from '../../images/background/black_point.png';
import imgWhite from '../../images/background/white_point.png';
import authSelectors from '../../redux/users/auth-selectors';

export const MainPageTitle = ({ title }) => {
  const theme = useSelector(authSelectors.getTheme);

  return (
    <ContaynerTitle>
      <Title>{title}</Title>
      <BackgroundTopOne src={img} alt="background" />
      {theme === 'white' ? (
        <BackgroundTop src={imgTop} alt="background" />
      ) : (
        <BackgroundTop src={imgWhite} alt="background" />
      )}

      <BackgroundTopBlack src={img} alt="background" />
    </ContaynerTitle>
  );
};
