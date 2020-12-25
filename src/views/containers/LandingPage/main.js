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
    const [ goToCarList, setGoToCarList ] = useState(false);
    const [ goToCatalogue, setGoToCatalogue ] = useState(false);
    const [ goToDashboard, setGoToDashboard ] = useState(false);
    const [ goToDevice, setGoToDevice ] = useState(false);
    const [ goToDocuments, setGoToDocuments ] = useState(false);
    const [ goToFitnessExercises, setGoToFitnessExercises ] = useState(false);
    const [ goToGithubList, setGoToGithubList ] = useState(false);
    const [ goToLogin, setGoToLogin ] = useState(false);
    const [ goToMail, setGoToMail ] = useState(false);
    const [ goToNotFound, setGoToNotFound ] = useState(false);
    const [ goToStatistics, setGoToStatistics ] = useState(false);
    const [ goToWeather, setGoToWeather ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false);
    
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
        innerText === 'CarList' && setTimeout(() => setGoToCarList(true), 1000);
        innerText === 'Catalogue' && setTimeout(() => setGoToCatalogue(true), 1000);
        innerText === 'Dashboard' && setTimeout(() => setGoToDashboard(true), 1000);
        innerText === 'Device' && setTimeout(() => setGoToDevice(true), 1000);
        innerText === 'Documents' && setTimeout(() => setGoToDocuments(true), 1000);
        innerText === 'FitnessExercises' && setTimeout(() => setGoToFitnessExercises(true), 1000);
        innerText === 'GithubList' && setTimeout(() => setGoToGithubList(true), 1000);
        innerText === 'Login' && setTimeout(() => setGoToLogin(true), 1000); 
        innerText === 'Mail' && setTimeout(() => setGoToMail(true), 1000);
        innerText === 'NotFound' && setTimeout(() => setGoToNotFound(true), 1000);
        innerText === 'Statistics' && setTimeout(() => setGoToStatistics(true), 1000);
        innerText === 'Weather' && setTimeout(() => setGoToWeather(true), 1000);
    }

    // const handleDarkMode = () => {
    //     color ? setColor(false) : setColor(true);
    // }
    
    let styleButton = color ? "#FFFFFF" :"#000000";
    let styleColor = color ? "#000000" : "#FFFFFF";
    return (
        <>
            <NavBarH />
            { goToCarList && <Redirect to='/carList'/> }
            { goToCatalogue && <Redirect to='/catalogue'/> }
            { goToDashboard && <Redirect to='/dashboard'/> }
            { goToDevice && <Redirect to='/device'/> }
            { goToDocuments && <Redirect to='/documents'/> }
            { goToFitnessExercises && <Redirect to='/documents'/> }
            { goToGithubList && <Redirect to='/githubList'/> }
            { goToLogin && <Redirect to='/login'/> }
            { goToMail && <Redirect to='/main'/> }
            { goToNotFound && <Redirect to='/notFound'/> }
            { goToStatistics && <Redirect to='/statistics'/> }
            { goToWeather && <Redirect to='/weather'/> }
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
                                    color={ styleColor }
                                    handleOnClick={ handleOnClick }
                                    text='CarList'
                                />
                                <Button
                                    backgroundColor= { styleButton }
                                    color={ styleColor }
                                    handleOnClick={ handleOnClick }
                                    text='Catalogue'
                                />
                                <Button
                                    backgroundColor= { styleButton }
                                    color={ styleColor }
                                    handleOnClick={ handleOnClick }
                                    text='Dashboard'
                                />
                                <Button
                                    backgroundColor= { styleButton } 
                                    color={ styleColor }
                                    handleOnClick={ handleOnClick }
                                    text='Device'
                                />
                                <Button
                                    backgroundColor= { styleButton }
                                    color={ styleColor }
                                    handleOnClick={ handleOnClick }
                                    text='Documents'
                                />
                                <Button
                                    backgroundColor= { styleButton }
                                    color={ styleColor }
                                    handleOnClick={ handleOnClick }
                                    text='FitnessExercises'
                                />
                                <Button
                                    backgroundColor= { styleButton }
                                    color={ styleColor }
                                    handleOnClick={ handleOnClick }
                                    text='GithubList'
                                />
                                <Button
                                    backgroundColor= { styleButton }
                                    color={ styleColor }
                                    handleOnClick={ handleOnClick }
                                    text='Login'
                                />
                                <Button
                                    backgroundColor= { styleButton }
                                    color={ styleColor }
                                    handleOnClick={ handleOnClick }
                                    text='Mail'
                                />
                                <Button
                                    backgroundColor= { styleButton }
                                    color={ styleColor }
                                    handleOnClick={ handleOnClick }
                                    text='NotFound'
                                />
                                <Button
                                    backgroundColor= { styleButton }
                                    color={ styleColor }
                                    handleOnClick={ handleOnClick }
                                    text='Statistics'
                                />
                                <Button
                                    backgroundColor= { styleButton }
                                    color={ styleColor }
                                    handleOnClick={ handleOnClick }
                                    text='Weather'
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
