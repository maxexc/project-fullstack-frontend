import styled from 'styled-components';

import theme from '../../style/generalStyle';

export const FooterBox = styled.footer`
  background: #22252a;
  padding-top: 28px;
  padding-bottom: 18px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media ${theme.device.tablet} {
    padding-right: 94px;
    padding-left: 32px;
  } ;
`;

export const BoxNav = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;

  margin-bottom: 32px;

  @media ${theme.device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 72px;
  } ;
`;

export const BoxLogoDescription = styled.div``;

export const BoxLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;

  @media ${theme.device.tablet} {
    justify-content: start;

    margin-bottom: 24px;
  } ;
`;

export const TextLogo = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;

  letter-spacing: 0.015em;

  color: #fafafa;

  flex: none;
  order: 1;
  flex-grow: 0;

  @media ${theme.device.tablet} {
    font-size: 28px;
    line-height: 28px;
  } ;
`;

export const ListDescrition = styled.ul`
  display: none;

  @media ${theme.device.tablet} {
    padding-left: 16px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    letter-spacing: -0.02em;

    color: #fafafa;
    display: block;
  } ;
`;

export const NavList = styled.ul`
  list-style: none;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 14px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  letter-spacing: -0.02em;

  color: #fafafa;

  @media ${theme.device.tablet} {
    align-items: start;
  } ;
`;

export const BoxForm = styled.form`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;

  margin-bottom: 44px;

  @media ${theme.device.tablet} {
    flex-direction: row;
    gap: 12px;
  } ;
`;

export const LabelForm = styled.label`
  position: absolute;
  top: 12px;
  left: 15px;
`;

export const Input = styled.input`
  padding-top: 11px;
  padding-bottom: 11px;
  padding-right: 20px;
  padding-left: 42px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: -0.02em;

  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5px;

  color: #fff;

  outline: 0;

  @media ${theme.device.tablet} {
    font-size: 14px;
    line-height: 21px;
  } ;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Poppins';
  font-size: 14px;
  line-height: 18px;

  color: #fff;
  background: #8baa36;

  width: 100%;
  padding: 11px 0;

  border: none;
  border-radius: 6px;

  &:hover {
    color: #000;
  }

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media ${theme.device.tablet} {
    padding: 11px 51px;
  } ;
`;

export const ListSocialNetworks = styled.ul`
  list-style: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;
