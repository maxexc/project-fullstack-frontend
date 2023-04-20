import { MdOutlineEmail } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import Notiflix from 'notiflix';

import logo from '../../images/Footer/logoFooter.png';
import { UseSvg } from '../../helpers/useSvg/useSvg';
import {
  FooterBox,
  FlexBox,
  BoxLogo,
  TextLogo,
  ListDescrition,
  NavList,
  BoxForm,
  BoxTitle,
  Title,
  Text,
  Input,
  Button,
  LabelForm,
  ListSocialNetworks,
  ImgSocial,
  BoxAfter,
} from './Footer.styled';

import { MainContainer } from '../MainContainer/MainContainer';

import { queryBackEnd } from '../../helpers/request';

export function Footer() {
  const [email, setEmail] = useState('');

  const getSubscription = async e => {
    e.preventDefault();
    const data = await queryBackEnd.querySubscribe(email);

    remove();
    Notiflix.Notify.success(`${data.message}`);
  };

  const remove = () => {
    setEmail('');
  };

  return (
    <>
      <FooterBox>
        <MainContainer>
          <FlexBox>
            <div>
              <BoxLogo>
                <NavLink>
                  <img src={logo} alt="" />
                </NavLink>
                <NavLink to="/home">
                  <TextLogo>So Yummy</TextLogo>
                </NavLink>
              </BoxLogo>

              <ListDescrition>
                <li>Database of recipes that can be replenished </li>
                <li>
                  <div>
                    Flexible search for desired and unwanted
                    <span> ingredients</span>
                  </div>
                </li>
                <li>Ability to add your own recipes with photos</li>
                <li>Convenient and easy to use</li>
              </ListDescrition>
            </div>

            <NavList>
              <li>
                <NavLink to="/search?type=ingredients">Ingredients</NavLink>
              </li>
              <li>
                <NavLink to="/add">Add recipes</NavLink>
              </li>
              <li>
                <NavLink to="/my">My recipes</NavLink>
              </li>
              <li>
                <NavLink to="/favorite">Favorites</NavLink>
              </li>
              <li>
                <NavLink to="/shopping-list">Shopping list</NavLink>
              </li>
            </NavList>

            <BoxForm>
              <BoxTitle>
                <Title>Subscribe to our Newsletter</Title>

                <Text>
                  Subscribe up to our newsletter. Be in touch with <br /> latest
                  news and special offers, etc.
                </Text>
              </BoxTitle>
              <div
                style={{
                  position: 'relative',
                }}
              >
                <LabelForm>
                  <MdOutlineEmail style={{ scale: '1.7', fill: '#fff' }} />
                </LabelForm>

                <Input
                  placeholder="Enter your email address"
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>

              <Button
                disabled={email.length > 0 ? false : true}
                type="button"
                onClick={e => getSubscription(e)}
              >
                Subcribe
              </Button>
            </BoxForm>
          </FlexBox>

          <ListSocialNetworks>
            <ImgSocial>
              <a href={'http://fb.com'} target="_blank" rel="noreferrer">
                <UseSvg id="facebook" />
              </a>
            </ImgSocial>

            <ImgSocial>
              <a href={'http://youtube.com'} target="_blank" rel="noreferrer">
                <UseSvg id="youtube" />
              </a>
            </ImgSocial>

            <ImgSocial>
              <a href={'http://twetter.com'} target="_blank" rel="noreferrer">
                <UseSvg id="twit" />
              </a>
            </ImgSocial>

            <ImgSocial>
              <a href={'http://instagram.com'} target="_blank" rel="noreferrer">
                <UseSvg id="inst" />
              </a>
            </ImgSocial>
          </ListSocialNetworks>
        </MainContainer>
      </FooterBox>
      <MainContainer>
        <BoxAfter>
          <span>© 2023 All Rights Reserved.</span>
          <span>Terms of Service</span>
        </BoxAfter>
      </MainContainer>
    </>
  );
}

export default Footer;
