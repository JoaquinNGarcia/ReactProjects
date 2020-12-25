import styled from 'styled-components';

export const LandingPageContainer = styled.div `
    height: 100%;
    margin: 40px 0 0 0;
    position: absolute;
    width: 100%;
`;

export const LandingPageContent = styled.div `
    height: 100%;
    width: 100%;
    @media (max-width: 768px) {
        align-items: center;
        background-size: cover;
        //background-image:  linear-gradient(90deg, rgba(117,70,138,1) 0%, rgba(117,70,138,0) 100%, rgba(255,255,255,1) 100%), url('../../assets/images/appBackground.jpg');
        display: flex;
        justify-content: center;
    }
`;

export const LandingPageDiv = styled.div `
    background: #9AFFEA;
    border-radius: 30px;
    box-shadow: 6px 15px 100px 0 rgba(0,0,0,0.16);
    box-sizing: content-box;
    height: auto;
    font-size: 14px;
    margin: auto auto;
    padding: 0px;
    width: inherit;
    @media (max-width: 768px) {
        font-size: 10px;
    }
`;

export const Welcome = styled.div `
    color: #000000;
    font-size: 25px;
    font-weight: bold;
    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

export const LandingPageLower = styled.div `
    align-items: center;
    background: #CBCBCB;
    border-radius: 30px;
    display: flex;
    font-size: 18px;
    flex-direction: column;
    height: 80%;
    justify-content: center;
    margin: auto;
    width: 60%;
    @media (max-width: 768px) {
        align-items: center;
        font-size: 14px;
        height: 60%;
        width: 60%;
    }
`;

export const SwitchLabel = styled.div `
    background: #bebebe;
    border-radius: 15px;
    cursor: pointer;
    position: absolute;
    left: 0;
    height: 30px;
    top: 0;
    width: 40px;
    &::after {
        background: #ffffff;
        border-radius: 50%;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
        content: "";
        display: block;
        height: 18px;
        margin: 3px;
        transition: 500ms;
        width: 18px;
    }
`;

export const Switch = styled.div `
    border-radius: 15px;
    height: 30px;
    opacity: 0;
    width: 40px;
    z-index: 1;
    &:checked + ${ SwitchLabel } {
        background: #4fbe79;
        &::after {
            border-radius: 50%;
            content: "";
            display: block;
            height: 18px;
            margin-left: 21px;
            transition: 500ms;
            width: 18px;
        }
    }
    @media (max-width: 768px) {
    }
`;

export const SwitchWraper = styled.div `
    position: relative;
`;

export const ThemeProvider = styled.div `
align-items: center;
    background: #FFFFFF;
    border: 0px;
    border-radius: 20px;
    color: #000000;
    cursor: pointer;
    display: flex;
    font-family: Arial;
    font-weight: bold;
    height: auto;
    justify-content: center;
    margin: auto; 
    margin-bottom: 6px;j    
    margin-top: 10px;
    padding: 5px 0px 5px 0px;
    text-align: center;
    width: 100px;
    @media (max-width: 768px) {
        padding: 0px 0px 5px 0px;
    }
`;
