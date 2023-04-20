import { MdOutlineEmail } from 'react-icons/md';
import { FaTwitter } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import logo from '../../images/Footer/logoFooter.png';
import {
  FooterBox,
  BoxNav,
  BoxLogoDescription,
  BoxLogo,
  TextLogo,
  ListDescrition,
  NavList,
  BoxForm,
  Input,
  Button,
  LabelForm,
  ListSocialNetworks,
} from './Footer.styled';

export function Footer() {
  return (
    <FooterBox>
      <BoxNav>
        <BoxLogoDescription>
          <BoxLogo>
            {/* <a href="#"> */}
            <img src={logo} alt="" />
            <TextLogo>So Yummy</TextLogo>
            {/* </a> */}
          </BoxLogo>

          <ListDescrition>
            <li>Database of recipes that can be replenished </li>
            <li>Flexible search for desired and unwanted ingredients</li>
            <li>Ability to add your own recipes with photos</li>
            <li>Convenient and easy to use</li>
          </ListDescrition>
        </BoxLogoDescription>

        <NavList>
          <li>Ingredients</li>
          <li>Add recipes</li>
          <li>My recipes</li>
          <li>Favorite</li>
          <li>Shopping list</li>
        </NavList>
      </BoxNav>

      <BoxForm>
        <div>
          <LabelForm>
            <MdOutlineEmail style={{ scale: '1.7', fill: '#fff' }} />
          </LabelForm>
          <Input
            placeholder="Enter your email address"
            name="email"
            type="text"
          />
        </div>

        <Button>Subcribe</Button>
      </BoxForm>

      <ListSocialNetworks>
        <li>
          <BsFacebook
            style={{ fill: '#8BAA36', width: '23px', scale: '1.5' }}
          />
        </li>
        <li>
          <AiFillYoutube
            style={{ fill: '#8BAA36', width: '23px', scale: '1.5' }}
          />
        </li>
        <li>
          <FaTwitter style={{ fill: '#8BAA36', width: '23px', scale: '1.5' }} />
        </li>
        <li>
          <BsInstagram
            style={{ fill: '#8BAA36', width: '23px', scale: '1.5' }}
          />
        </li>
      </ListSocialNetworks>
    </FooterBox>
  );
}

export default Footer;
