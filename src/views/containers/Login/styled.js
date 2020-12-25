import styled from 'styled-components';

export const Label = styled.div `
    border: 0px;
    color: #FFFFFF;
    font-family: serif;
    height: auto;
    margin: 10px 0px 2px 0px;
    text-align: center;
    width: unset;
`;

export const ItemPasswordLogin = styled.div `
    margin: 15px 0 25px 0;
    width: 100%;
`;

export const ItemUserLogin = styled.div `
    margin: 15px 0 0 0;
    width: 100%;
`;

export const LoginContainer = styled.div `
    height: 100%;
    position: absolute;
    width: 100%;
`;

export const LoginContent = styled.div `
    height: 100%;
    width: 100%;
    @media (min-width: 1030px) {
        align-items: center;
        background-size: cover;
        display: flex;
        justify-content: center;
    }
`;

export const LoginDiv = styled.div `
    height: 100%;
    width: 100%;
    @media (min-width: 1030px) {
        background: #9AFFEA;
        border-radius: 30px;
        box-sizing: content-box;
        box-shadow: 6px 15px 100px 0 rgba(0,0,0,0.16);
        height: auto;
        margin: auto auto;
        padding: 0 0 30px 0;
        width: 40%;
    }
`;

export const LoginLower = styled.div `
    align-items: center;
    background: #004F52;
    border-radius: 0 0 20px 20px;
    display: flex;
    flex-direction: column;
    height: 70%;
    justify-content: center;
    margin: auto;
    width: 80%;
    @media (min-width: 1030px) {
        padding: 0px 0 30px 10px;
        width: 85%;
    }
`;

export const Text = styled.div `
    background ${ ({ styleBackground }) => styleBackground };
    border: ${ ({ styleBorder }) => `1.5px solid ${ styleBorder }` };
    border-radius: 25px;
    box-sizing: content-box;
    color: ${ ({ styleColor }) => styleColor };
    height: auto;
    font-weight: ${ ({ styleWeight }) => styleWeight };
    margin: 10px;
    outline: none;
    padding: 5px 10px;
    text-align: center;
    width: auto;
`;

export const Welcome = styled.div `
    color: #FFFFFF;
    font-size: 20px;
    font-weight: bold;
`;
