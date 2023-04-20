import styled from 'styled-components';
import theme from '../generalStyle';

export const Box = styled.div`
  padding: ${props => props.theme.buttons[props.value].box.padding};

  background: ${props => props.theme.buttons[props.value].box.background};

  clip-path: ${props => props.theme.buttons[props.value].box.clipPath};

  &:hover {
    background: ${props =>
      props.theme.buttons[props.value].box.hoverBackground};
  }

  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ButtonCustom = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  font-family: 'Poppins';

  padding: ${props => props.theme.buttons[props.value].padding};

  color: ${props => props.theme.buttons[props.value].color};
  background: ${props => props.theme.buttons[props.value].background};

  border: ${props => props.theme.buttons[props.value].border};
  border-radius: ${props => props.theme.buttons[props.value].borderRadius};

  font-size: ${props => props.theme.buttons[props.value].fontSize};
  line-height: ${props => props.theme.buttons[props.value].lineHeight};

  cursor: pointer;

  &:hover,
  ${Box}:hover & {
    color: ${props => props.theme.buttons[props.value].hoverColor};
    background: ${props => props.theme.buttons[props.value].hoverBackground};
    border-color: ${props => props.theme.buttons[props.value].hoverBorderColor};
  }

  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media ${theme.device.tablet} {
    padding: ${props => props.theme.buttons[props.value].tablet.padding};

    font-size: ${props => props.theme.buttons[props.value].tablet.fontSize};
    line-height: ${props => props.theme.buttons[props.value].tablet.lineHeight};
  }
`;
