import styled from 'styled-components';

import theme from '../../style/generalStyle';

export const FooterBox = styled.footer`
  background: ${props => props.theme.color.footer.bavkgroundFooter};
  padding-top: 28px;
  padding-bottom: 18px;
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
  calc((100%) / 1);
  margin-bottom: 44px;

  
  @media ${theme.device.tablet} {
    width: 100%;
    justify-content: space-around;
    flex-direction: row;

    flex-wrap: wrap;
  calc((100% - 32px) / 2);
  gap: 32px;
    margin-bottom: 38px;

  };

  //  @media screen and (min-width: 1281px) {
  //   width: 100%;
  //   justify-content: space-between;
  //   flex-direction: row;

  //   flex-wrap: nowrap;
  // calc((100% - 64px) / 3);

  // margin-bottom: 41px;
  // };
`;

export const BoxLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;

  @media ${theme.device.tablet} {
    justify-content: start;

    margin-bottom: 24px;
  }

  @media ${theme.device.tablet} {
    justify-content: start;

    margin-bottom: 40px;
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
  // list-style: inside;

  @media ${theme.device.tablet} {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    letter-spacing: -0.02em;

    color: #fafafa;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  @media ${theme.device.desktop} {
    font-size: 18px;
    line-height: 24px;
    gap: 12px;

    & > li:nth-child(2) > div {
      display: flex;
      flex-direction: column;
    }
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
    align-items: baseline;
  }

  @media screen and (min-width: 1281px) {
    margin-left: 0;
    margin-right: 0;
  }

  @media ${theme.device.desktop} {
    align-items: center;
    margin-left: 0;
    gap: 24px;
  }

  li a {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;

    letter-spacing: -0.02em;

    color: #fafafa;
    &:hover {
      color: ${props => props.theme.color.footer.hoverLink};
    }

    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const BoxForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;

  @media ${theme.device.tablet} {
    flex-direction: row;
    gap: 12px;
  }

  @media screen and (min-width: 1231px) {
    flex-direction: column;
    align-items: start;

    gap: 12px;
  }

  @media ${theme.device.desktop} {
    margin-left: 70px;
  } ;
`;

export const BoxTitle = styled.div`
  display: none;

  @media ${theme.device.desktop} {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
  }
`;

export const Title = styled.h2`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;

  /* identical to box height */

  color: #fafafa;
`;
export const Text = styled.h2`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  /* or 129% */
  letter-spacing: -0.02em;

  color: #fafafa;
`;

export const LabelForm = styled.label`
  position: absolute;
  top: 15px;
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
  width: 251px;
  cursor: ${props => (!props.disabled ? 'pointer' : 'initial')};

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Poppins';
  font-size: 14px;
  line-height: 18px;

  color: #fff;
  background: ${props =>
    !props.disabled
      ? props.theme.color.footer.buttonBg
      : props.theme.color.footer.buttonBgDisable};

  padding: 11px 0;

  border: none;
  border-radius: 6px;

  ${props =>
    !props.disabled
      ? `&:hover {color: ${props.theme.color.footer.hoverButtonText};
    box-shadow: ${props.theme.color.footer.hoverBoxShadow};}`
      : ''}

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), background 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media ${theme.device.tablet} {
    width: 171px;
  }

  @media screen and (min-width: 1231px) {
    width: 100%;
  }

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ListSocialNetworks = styled.ul`
  list-style: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const ImgSocial = styled.li`
  svg {
    fill: ${props => props.theme.color.footer.iconFill};

    &:hover {
      fill: ${props => props.theme.color.footer.hoverIconFill};
    }
  }
`;

export const BoxAfter = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  gap: 14px;
  padding: 28px 0;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 10px;

  letter-spacing: -0.01em;

  color: ${props => props.theme.color.footer.textBottom};

  opacity: 0.5;

  @media ${theme.device.desktop} {
    font-size: 14px;
    line-height: 14px;
  }
`;
