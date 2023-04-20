import styled from 'styled-components';
import theme from '../../style/generalStyle';
import { Tabs, Tab, Box } from '@mui/material';

export const StyledTabs = styled(Tabs)`
  && {
    border: '1px solid blue';
  }
`;

export const StyledTab = styled(Tab)`  

  && {
    
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    color: #bdbdbd;
    text-transform: capitalize;
    padding: 0 22px;
    &:hover {
      color: #8baa36;
    }
    &:focus {
      color: #8baa36;
    }
    &:active {
      color:#8baa36;
    }
    & button.Mui-selected {
      color:#8baa36 !important;
    }  
  }
  
`;

export const RecipesBox = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  padding-top: 32px;
  row-gap: 28px;
  margin-bottom: 100px;

  @media ${theme.device.tablet} {
    padding-top: 50px;
    row-gap: 32px;
    column-gap: 32px;
    margin-bottom: 200px;
  }
  @media ${theme.device.desktop} {
    padding-top: 40px;
    row-gap: 100px;
    column-gap: 13px;
    margin-bottom: 200px;
  }
`;

