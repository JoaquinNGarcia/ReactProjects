import React from 'react';
import {
    DarkModeButtonContainer,
    ThemeButton
} from './styled';
// import ThemeButton from './ThemeButton/main';

const DarkModeButton = ({ text }) => {
    return (
        <DarkModeButtonContainer>
            {
                theme => (
                    <ThemeButton
                        vairant="primary"
                        onClick={ e =>
                            theme.setTheme(
                                    theme.mode === "mode"
                                        ? { ...theme, mode: 'light' }
                                        : { ...theme, mode: 'dark' }
                            )
                        }
                    >
                        { text }
                    </ThemeButton>
                )
            }
        </DarkModeButtonContainer>
    );
};

export default DarkModeButton;
