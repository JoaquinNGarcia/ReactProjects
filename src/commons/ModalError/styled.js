import styled from 'styled-components';

export const ModalErrorContainer = styled.div `
    background: rgba(255, 0, 0, 0.05);
    border-radius: 10px;
    height: fit-content;
    margin: 0 auto 10px auto;
    padding: 10px 0 10px 10px;
    text-align: center;
    width: 100%;
`;

export const ModalErrorText = styled.div `
    color: #f9314b;
    font-family: 'Quicksand';
    font-size: 14px;
    font-weight: 400;
    margin: 0;
`;

export const ModalErrorTitle = styled.div `
    color: #f9314b;
    font-family: 'Quicksand';
    font-size: 16px;
    font-weight: 800;
    margin: 0;
`;
