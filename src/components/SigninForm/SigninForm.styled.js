import styled from 'styled-components';
import theme from '../../style/generalStyle';

export const Container = styled.div`
    z-index: 3;
    text-align: center;

    @media ${theme.device.desktop} {
        margin-left: 115px;
    }
`

export const Form = styled.form`
    border-radius: 30px;
    padding: 32px 28px 40px 28px;
    margin-bottom: 18px;

    background-color: #2A2C36;

    @media ${theme.device.tablet} {
        padding: 44px 50px;
    }
`

export const FormTitle = styled.h2`
    margin-bottom: 18px;

    text-align: left;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 1.17;
    letter-spacing: -0.02em;

    color: #FAFAFA;

    @media ${theme.device.tablet} {
        margin-bottom: 32px;

        font-size: 28px;
        line-height: 1.07;
    }

    /* desktop */
    @media screen and (min-width: 1025px) {
        margin-bottom: 50px;
    }
`
export const List = styled.ul`
    list-style: none;
`

export const ListItem = styled.li`
    position: relative;
    margin-bottom: 12px;

    &:last-of-type {
        margin-bottom: 28px;
    }

    @media ${theme.device.tablet} {
        margin-bottom: 24px;

        &:last-of-type {
        margin-bottom: 50px;
    }
    }
`

export const Label = styled.label`
    svg {
        position: absolute;
        top: 13px;
        left: 14px;

        width: 18px;
        height: 18px;

        stroke: #FAFAFA;
        opacity: 0.8;

        @media ${theme.device.tablet} {
            width: 24px;
            height: 24px;

            top: 18px;
        }
    }
`

export const Input = styled.input`
    padding: 12px 14px 12px 40px;
    border: 1px solid #FAFAFA;
    border-radius: 6px;
    width: 200px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;

    color: #FAFAFA;
    opacity: 0.8;

    background-color: transparent;

    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @media ${theme.device.tablet} {
        font-size: 18px;
    }

    &:hover,
    &:focus {
        border: 1px solid #8BAA36;
    }

    &::placeholder {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 1.5;
        letter-spacing: -0.02em;

        color: #FAFAFA;
        opacity: 0.8;

        @media ${theme.device.tablet} {
            font-size: 18px;
        }
    }

    @media ${theme.device.tablet} {
        padding: 16px 18px 16px 50px;
        width: 300px;
    }
`

export const Button = styled.button`
    padding: 12px 0;
    width: 100%;
    border-radius: 6px;
    border: none;

    text-align: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.12;

    background-color: #8BAA36;
    color: #FAFAFA;

    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        color: #22252A;
    }

    @media ${theme.device.tablet} {
        padding: 19px 0;
        font-size: 16px;
    }   
`

export const Redirect = styled.span`
    text-decoration: underline;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;

    color: #FAFAFA;

    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        color: #8BAA36;
        text-decoration: none;
    }

    @media ${theme.device.tablet} {
        font-size: 16px;
    } 
`