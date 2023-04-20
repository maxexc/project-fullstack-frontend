import { Icons, Follow } from './FollowUs.styled';
import { Title } from './RecipeIngridientsFields.styled';
import { Fb, Youtube, Twiter, Instagram } from './FollowUs.styled';

const FollosUs = () => {
  return (
    <Follow>
      <Title>Follow Us</Title>
      <Icons>
        <a href={'http://fb.com'}>
          <Fb fill="#8BAA36" size="26" />
        </a>
        <a href={'http://youtube.com'}>
          <Youtube fill="#8BAA36" size="26" />
        </a>
        <a href={'http://twetter.com'}>
          <Twiter fill="#8BAA36" size="26" />
        </a>
        <a href={'http://instagram.com'}>
          <Instagram fill="#8BAA36" size="26" />
        </a>
      </Icons>
    </Follow>
  );
};

export default FollosUs;
