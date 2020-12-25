import styled from 'styled-components';

export const ButtonContent = styled.div `
    align-items: center;
    font-size: 18px;
    height: 100px;
    justify-content: center;
    margin: 55px 0 0 0;
    position: absolute;
    width: 100%;
`;

export const Info = styled.div `
    align-items: center;
    font-size: 18px;
    height: 200px;
    justify-content: center;
    margin-top: 10px;    
    position: absolute;
    text-align: center;
    width: 100%;    
`;

export const NavMenu = styled.div `
    background-color: ${ ({ styleBackground }) => styleBackground };
    color: ${ ({ styleColor }) => styleColor};
    display: flex;
    height: 100%;
    justify-content: center;
    position: fixed;
    transition: 850ms;
    width: 250px;
`;

export const Title = styled.div `
    font-family: arial;
    font-weight: 600;
    margin-bottom: 10px;
`;
