import styled from 'styled-components';
import theme from '../../style/generalStyle';

export const ListWrapper = styled.ul`
display: flex;
flex-direction: column;
 li {
    list-style-type: none;
    }


@media ${theme.device.tablet} {
display: flex;
flex-direction: column;
}

@media ${theme.device.desktop} {
display: flex;
flex-direction: column;
`;

