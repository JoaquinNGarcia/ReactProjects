import React from 'react';
import {
    InputContainer,
    regularStyle,
    errorStyle
} from './styled.js';

const Input = ({
    attribute: {
        inputType,
        name,
        placeholder
    },
    handleChange,
    param
}) => {
    
    return (
        <InputContainer>
            {
                param
                ? <errorStyle>
                    <input
                        id={ name }
                        name={ name }
                        onChange={ ({target: {name, value}}) => handleChange(name, value)}
                        placeholder={ placeholder }
                        type={ inputType }
                    />
                </errorStyle>
                : <regularStyle>
                    <input
                        id={ name }
                        name={ name }
                        onChange={ ({target: {name, value}}) => handleChange(name, value)}
                        placeholder={ placeholder }
                        type={ inputType }
                    />
                </regularStyle>
            }
        </InputContainer>
    );
};

export default Input;
