import styled from 'styled-components';
import theme from 'style/generalStyle';

export const Wrap = styled.div`
display: flex;
flex-direction: column;
width: 100%;

@media ${theme.device.desktop} {
    flex-direction: row;
}

`;

export const Col = styled.div`
display: flex;
flex-direction: column;
`;
