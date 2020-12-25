import React, {
    useState
} from 'react';
import {
	LandingPageContainer,
	LandingPageContent,
    LandingPageDiv,
    LandingPageLower,
    // Switch,
    // SwitchWraper,
    // SwitchLabel,
    ThemeProvider,
    Welcome
} from './styled';
import { 
    Redirect
} from 'react-router-dom';
import useTheme  from '../../../commons/DarkModeButton/UseTheme/main';

import DarkModeButton from '../../../commons/DarkModeButton/main';

// import {
// } from 'prop-types';

import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import Button from '../../../commons/Button/main';

import NavBarH from '../../../commons/NavBarH/main';

const useStyles = makeStyles(theme => ({
	backdrop: {
		zIndex: 2,
		color: '#fff',
	},
}));

const LandingPage = () => {

    const [color, setColor] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ goToLogin, setGoToLogin ] = useState(false);
    const [ goToCarList, setGoToCarList ] = useState(false);
    const [ goToStatistics, setGoToStatistics ] = useState(false);
    const [ goToCatalogue, setGoToCatalogue ] = useState(false);
    const [ goToDashboard, setGoToDashboard ] = useState(false);
    const [ goToWeather, setGoToWeather ] = useState(false);
    const [ goToDevice, setGoToDevice ] = useState(false);
    const [ goToDocuments, setGoToDocuments ] = useState(false);
    const [ goToNotFound, setGoToNotFound ] = useState(false);
    const [ goToGithubList, setGoToGithubList ] = useState(false);
    
    const classes = useStyles();
    const open = true;

    const theme = useTheme();

    const stopIsLoading = () => {
		setIsLoading(false);
       	// showErrors();
	}

    const handleOnClick = ({ target: { innerText }}) => {
        console.log('Click: ', innerText);
        setTimeout(() => stopIsLoading(), 1000);
        setIsLoading(true);
        innerText === 'Login' && setTimeout(() => setGoToLogin(true), 1000); 
        innerText === 'CarList' && setTimeout(() => setGoToCarList(true), 1000);
        innerText === 'Statistics' && setTimeout(() => setGoToStatistics(true), 1000);
        innerText === 'Catalogue' && setTimeout(() => setGoToCatalogue(true), 1000);
        innerText === 'Dashboard' && setTimeout(() => setGoToDashboard(true), 1000);
        innerText === 'Weather' && setTimeout(() => setGoToWeather(true), 1000);
        innerText === 'Device' && setTimeout(() => setGoToDevice(true), 1000);
        innerText === 'Documents' && setTimeout(() => setGoToDocuments(true), 1000);
        innerText === 'NotFound' && setTimeout(() => setGoToNotFound(true), 1000);
        innerText === 'GithubList' && setTimeout(() => setGoToGithubList(true), 1000);
    }

    // const handleDarkMode = () => {
    //     color ? setColor(false) : setColor(true);
    // }
    
    let styleButton = color ? "#FFFFFF" :"#000000";
    let styleColor = color ? "#000000" : "#FFFFFF";
    return (
        <>
            <NavBarH />
            { goToLogin && <Redirect to='/login'/> }
            { goToCarList && <Redirect to='/carList'/> }
            { goToStatistics && <Redirect to='/statistics'/> }
            { goToCatalogue && <Redirect to='/catalogue'/> }
            { goToDashboard && <Redirect to='/dashboard'/> }
            { goToWeather && <Redirect to='/weather'/> }
            { goToDevice && <Redirect to='/device'/> }
            { goToDocuments && <Redirect to='/documents'/> }
            { goToNotFound && <Redirect to='/notFound'/> }
            { goToGithubList && <Redirect to='/githubList'/> }
            
            <LandingPageContainer>
                {/* <SwitchWraper>
                    <Switch id="switch" type="switch" handleOnClick={ handleDarkMode }/>
                    Dark Mode
                    <SwitchLabel />
                </SwitchWraper> */}
                {/* <ThemeProvider theme={ theme }>
                    <DarkModeButton
                        onClick={ e =>
                            theme.setTheme (
                                theme.textZoom === 'normal'
                                    ? { ...theme, textZoom: 'magnify' }
                                    : { ...theme, textZoom: 'normal' }
                            )
                        }
                    >
                        DarkMode
                    </DarkModeButton>
                </ThemeProvider> */}
                <ThemeProvider>
                    <DarkModeButton
                        theme={ theme }
                        text='Login'
                    />
                </ThemeProvider>
                <LandingPageContent>
                    <LandingPageLower>
                        <Welcome>¡BIENVENIDO!</Welcome>
                        <LandingPageDiv>
                                <Button
                                    backgroundColor= { styleButton }
                                    text='Login'
                                    handleOnClick={ handleOnClick }
                                    color={ styleColor }
                                />
                                <Button
                                    backgroundColor= { styleButton }
                                    text='CarList'
                                    handleOnClick={ handleOnClick }
                                    color={ styleColor }
                                />
                                <Button
                                    backgroundColor= { styleButton }
                                    text='Statistics'
                                    handleOnClick={ handleOnClick }
                                    color={ styleColor }
                                />
                                <Button
                                    backgroundColor= { styleButton }
                                    text='Catalogue'
                                    handleOnClick={ handleOnClick }
                                    color={ styleColor }
                                />
                                <Button
                                    backgroundColor= { styleButton }
                                    text='Dashboard'
                                    handleOnClick={ handleOnClick }
                                    color={ styleColor }
                                />
                                <Button
                                    backgroundColor= { styleButton }
                                    text='Weather'
                                    handleOnClick={ handleOnClick }
                                    color={ styleColor }
                                />
                                <Button
                                    backgroundColor= { styleButton } 
                                    text='Device'
                                    handleOnClick={ handleOnClick }
                                    color={ styleColor }
                                />
                                <Button
                                    backgroundColor= { styleButton }
                                    text='Documents'
                                    handleOnClick={ handleOnClick }
                                    color={ styleColor }
                                />
                                <Button
                                    backgroundColor= { styleButton }
                                    text='NotFound'
                                    handleOnClick={ handleOnClick }
                                    color={ styleColor }
                                />
                                <Button
                                    backgroundColor= { styleButton }
                                    text='GithubList'
                                    handleOnClick={ handleOnClick }
                                    color={ styleColor }
                                />
                                {
                                    isLoading &&
                                        <Backdrop open={ open } className={classes.backdrop}>
                                            <CircularProgress color="inherit" />
                                        </Backdrop>
                                }
                        </LandingPageDiv>
                    </LandingPageLower>
                </LandingPageContent>
            </LandingPageContainer>
        </>
	);
};

// LandingPage.propTypes = {
    
// };

export default LandingPage;
