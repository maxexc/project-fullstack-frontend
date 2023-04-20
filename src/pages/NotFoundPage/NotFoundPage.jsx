import {
  NotFoundContainer,
  ImgContainer,
  TextBox,
} from './NotFoundPage.styled';
import notfoundMob1 from '../../images/NotFound/not_found_mob_1x.png';
import notfoundMob2 from '../../images/NotFound/not_found_mob_2x.png';
import notfoundTablet1 from '../../images/NotFound/not_found_tablet_1x.png';
import notfoundTablet2 from '../../images/NotFound/not_found_tablet_2x.png';
import notfoundDesktop1 from '../../images/NotFound/not_found_desk_1x.png';
import notfoundDesktop2 from '../../images/NotFound/not_found_desk_2x.png';
import { useEffect } from 'react';

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <NotFoundContainer>
      <ImgContainer>
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet={`${notfoundDesktop1}, ${notfoundDesktop2} 2x`}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${notfoundTablet1}, ${notfoundTablet2} 2x`}
          />
          <img
            src={notfoundMob1}
            srcSet={`${notfoundMob1}, ${notfoundMob2} 2x`}
            alt="Error"
          />
        </picture>
      </ImgContainer>
      <TextBox>
        <h3>We are sorry,</h3>
        <p>but the page you were looking for can’t be found..</p>
      </TextBox>
    </NotFoundContainer>
  );
};

export default NotFound;
