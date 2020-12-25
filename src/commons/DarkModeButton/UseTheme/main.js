import /*React,*/ {
        useState,
        useEffect
    }
from 'react';

// import {
//     UseThemeContainer
// } from './styled';

const UseTheme = (
    defaultTheme = {
        mode: 'light'
    }
) => {

    const getInitialTheme = () => {
        const savedTheme =  localStorage.getItem('theme');
        return savedTheme ? JSON.parse(savedTheme) : defaultTheme;
    }
    
    const [theme, _setTheme] = useState(getInitialTheme);
    
    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme));
    }, [theme]);

    return {
        ...theme,
        setTheme: ({ setTheme, ...theme}) => _setTheme(theme)
    };
};

export default UseTheme;