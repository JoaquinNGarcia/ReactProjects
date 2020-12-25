import styled from 'styled-components';
import style from 'styled-theming';


export const DarkModeButtonContainer = styled.div `
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    height: auto;
    font-family: Arial;
    font-weight: bold;
    justify-content: center;
    margin: auto;
    padding: 30px 0px 5px 0px;
    text-align: center;
    width: 100px;
    background: #000000;
    color: #FFFFFF;
    @media (max-width: 768px) {
        padding: 0px 0px 5px 0px;
    }
`;

const getBackground = style.variants('mode', 'variant', {
    normal: {
        light: '#EEE',
        dark: '#EEE'
    },
    primary: {
        light: '#FFEFD5',
        dark: '#F7BFBE'
    }
});

export const ThemeButton = styled.button `
    backgroun-color: ${ getBackground };
    @media (max-width: 768px) {
        
    }
`;
