import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Poppins';

  width: ${props => props.theme.buttons[props.value].width};
  padding: ${props => props.theme.buttons[props.value].padding};

  font-size: ${props => props.theme.buttons[props.value].fontSize};
  line-height: ${props => props.theme.buttons[props.value].lineHieght};

  background: ${props => props.theme.buttons[props.value].background};
  color: ${props => props.theme.buttons[props.value].color};

  border: ${props => props.theme.buttons[props.value].border};
  border-radius: ${props => props.theme.buttons[props.value].borderRadius};

  &:hover {
    color: ${props => props.theme.buttons[props.value].hoverColor};
    background: ${props => props.theme.buttons[props.value].hoverBackground};
    border: ${props => props.theme.buttons[props.value].hoverBorder};
  }
`;
