import styled from 'styled-components';
import image from '../../images/background/bg-list-3x.png';

export const BoxBackgroun = styled.div`
  background-repeat: no-repeat;
  background-image: url('${image}');
  background-position: bottom -100px left 0px;
  background-size: 687px;
`;

export const Body = styled.div`
  background: ${props => props.theme.color.backgrounGlobal}
`;
