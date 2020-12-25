import {
    ModalErrorContainer,
    ModalErrorTitle,
    ModalErrorText
} from './styled';
import React from 'react';

const ModalError = ({
    handleOnClick,
    text,
    title
}) => {
    return (
        <ModalErrorContainer OnClick={ handleOnClick } >
            <ModalErrorTitle>
                { title }
            </ModalErrorTitle>
            <ModalErrorText>
                { text }
            </ModalErrorText>
        </ModalErrorContainer>
    );
};

export default ModalError;
