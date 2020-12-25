import {
	LoginContainer,
	LoginContent,
	LoginDiv,
	LoginLower,
	//LoginHigher,
	Text,
	Welcome,
	Label,
	ItemUserLogin,
	ItemPasswordLogin
} from './styled';
import {
	bool,
	func,
	object
} from 'prop-types';
import React, {
    useState
} from 'react';
import { 
	Redirect,
	// withRouter
} from 'react-router-dom';

import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import Input from '../../../commons/Input/main';
import Button from '../../../commons/Button/main';

// import ImageLogo from '../../../commons/ImageLogo/main';
// import ModalError from '../../../commons/ModalError/main'; 

const useStyles = makeStyles(theme => ({
	backdrop: {
		zIndex: 2,
		color: '#fff',
	},
}));

const Login = () => {

	const classes = useStyles();
	const [ checked, setChecked ] = useState(false);
	const [ checking, setChecking ] = useState(false);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ isLogin, setIsLogin ] = useState(false);
	const [ password, setPassword ] = useState('');
	const [ result, setResult ] = useState(false);
	const [ userName, setUserName ] = useState('');
	const correctPassword='123456'
	const open = true;
	
	// const [ date, setDate ] = useState(new Date());
	//const [ logo, setLogo ] = useState(''); Para desarrollar mas adelante
	// const [ hasErrors, setHasErrors ] = useState(false);
	// const [ errors, setErrors ] = useState({
    //     userNameError: false,
    //     passwordError: false
	// }); Para desarrollar mas adelante

	// useEffect(() => {
    //     setDate(new Date());
	// 	//setLogo('Ford1.jpg'); Para desarrollar mas adelante
    // }, [setDate,/*, setLogo*/]);

	const handleChange = (name, value) => {
		switch(name) {
			case 'userName':
				// setErrors({ userNameError: false, passwordError: false }); Para desarrollar mas adelante
				// setHasErrors(false);
				setResult(false);
                setUserName(value);
                break;
            case 'password':
                // setErrors({ userNameError: false, passwordError: false }); Para desarrollar mas adelante
				// setHasErrors(false);
				setResult(false);
                setPassword(value);
                break;
            default: 
            	console.log('handleChange - No hay valores')
		}
	}

	// const showErrors = () => {
	// 	setHasErrors(true);
    //     // setErrors({ Para desarrollar mas adelante
	// 	// 	userNameError: true,
	// 	// 	passwordError: true
	// 	// })
	// }

	const handleOnClick = () => {
        let login = { userName, password }
        if (login) {
            ifMatch(userName, password)
		}
	}

	const ifMatch = (user, password) => {
		if (password === correctPassword) {
			localStorage.setItem("account", JSON.stringify({ user, password }));
			setTimeout(() => setIsLogin(true), 2000);
			setTimeout(() => stopIsLoading(), 2000);
			setIsLoading(true);
			setChecked(true);
			setChecking(false);
			setResult(true); 
        } else {
		   	setChecked(true);
			setChecking(false);
			setResult(false);
		}
	}

	const stopIsLoading = () => {
		setIsLoading(false);
       	// showErrors();
	}

	// const clearErrorModal = () => {
	// 	setHasErrors(false);
    //     // setErrors({
	// 	// 	userNameError: false,
	// 	// 	passwordError: false })
	// }

	// Para desarrollar mas adelante
	// let params =
    //     errors.userNameError === false &&
    //     errors.passwordError === false
	// ; 
	let styleColor = result ? "#1BFF00" : "#FFFFFF";
	return (
		<>
			{/* Cuando renderiza el componente de nuevo isLogin reinicia su estado en falso */}
			{ isLogin && <Redirect to='/dashboard'/> }
			{/* {
				setTimeout(() => <div> Hora Actual: { date.toLocaleTimeString() }</div>, 1000)
			}
			<div> Hora Actual: { date.toLocaleTimeString() }</div> */}
            <LoginContainer>
				<LoginContent>
					<LoginDiv>
						{/* <LoginHigher img={ 'Ford1.jpg' }/> Para desarrollar mas adelante*/}
						<LoginLower>
							{/* { !!logo && <ImageLogo image={ 'Ford1.jpg' }/> } Para desarrollar mas adelante*/}
							<Welcome>¡BIENVENIDO!</Welcome>
							{/* Para desarrollar mas adelante */}
							{/* { hasErrors && 
								<ModalError
									title='Ocurrio un error!'
									text="Usuario o contraseña no existen."
									handleOnClick={ clearErrorModal }
								/>
							} */}
							<ItemUserLogin>
								<Label>Nombre de usuario</Label>
								<Input
									attribute={{
										inputType: 'text',
										name: 'userName',
										placeholder: 'Ingrese usuario'
									}}
									handleChange={ handleChange }
									//param={ errors.userNameError }Para desarrollar mas adelante
								/>
							</ItemUserLogin>
							<ItemPasswordLogin>
								<Label>Contraseña</Label>
								<Input
									attribute={{
										inputType: 'password',
										name: 'password',
										placeholder: 'Ingrese contraseña'
									}}
									handleChange={ handleChange }
									//param={ errors.passwordError }Para desarrollar mas adelante
								/>
							</ItemPasswordLogin>
							{
								checking
									? <Text styleColor={ "#FF7000" }> Verificando usuario </Text>
									: !checked 
										? userName.length > 0 && password.length > 0
											? <Text styleColor={ "#FF7000" }> Presione el botón para verificar </Text>
											: <Text styleColor = { "#FFFFFF" }> Ingrese usuario y contraseña </Text>
										: result
											? <Text
												styleBackground={ "#DCFFD4" }
												styleBorder={ "#49E500" }
												styleColor={ "#1BFF00" }
												styleWeight={ "bold" }
											>
													El usuario ingresado es correcto
												</Text>
											: <Text
												styleBackground={ "#FFC8C8" }
												styleBorder={ "#E50000" }
												styleColor={ "#FF0000" }
												styleWeight={ "bold" }
											> 
												Las credenciales no fueron verificadadas
											</Text>
							}
							<Button 
								color = { styleColor }
								handleOnClick={ handleOnClick }
								text='Ingresar'
								//param={ params }Para desarrollar mas adelante
							/>
							{ 	isLoading &&
									<Backdrop
										className={ classes.backdrop }
										open={ open }
									>
										<CircularProgress color="inherit" />
									</Backdrop>
							}
						</LoginLower>
					</LoginDiv>
				</LoginContent>
			</LoginContainer>
		</>
	)
};

Login.propTypes = {
    checked: bool,
	checking: bool,
	result: bool,
    history: object,
    setLoginValidate: func
};

export default Login;
