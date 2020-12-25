import React from 'react';
// import {

// } from 'prop-types';
import {
	BrowserRouter as Router,
	Redirect,
	Switch,
	Route
} from 'react-router-dom';
import CarList from '../views/containers/CarList/main';
import Catalogue from '../views/containers/Catalogue/main';
import Dashboard from '../views/containers/Dashboard';
import Device from '../views/containers/Device/main';
import Documents from '../views/containers/Documents/main';
import FitnessExercises from '../views/containers/FitnessExercises/main';
import GithubList from '../views/containers/GithubList/main';
import LandingPage from '../views/containers/LandingPage/main';
import Login from '../views/containers/Login/main';
import NotFound from '../views/containers/NotFound/main';
import Statistics from '../views/containers/Statistics/main';
import Weather from '../views/containers/Weather/main';

// import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
// import { isEmpty } from 'lodash';
// import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
// const locationHelper = locationHelperBuilder({});

// const userIsAuthenticated = connectedRouterRedirect({
// 	redirectPath: (state, props) =>  locationHelper.getRedirectQueryParam(props) || '/dashboard',
// 	allowRedirectBack: false,
// 	authenticatedSelector: ({ user }) => isEmpty(user)
// })

// const userIsNotAuthenticated = connectedRouterRedirect({
// 	redirectPath: '/login',
// 	allowRedirectBack: true,
// 	authenticatedSelector: ({ user }) => !isEmpty(user)
// })
// {console.log('userIsNotAuthenticated', userIsNotAuthenticated)}

const App = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route
						path='/login'
						// component={ userIsAuthenticated(Login) }
						component={ Login }
					/>
					<Route
						path='/dashboard'
						// component={ userIsNotAuthenticated(Dashboard) }
						component={ Dashboard }
					/>
					<Route 
						path='/landingPage'
						component={ LandingPage }
					/>
					<Route 
						path='/carList'
						component={ CarList }
					/>
					<Route 
						path='/statistics'
						component={ Statistics }
					/>
					<Route 
						path='/catalogue'
						component={ Catalogue }
					/>
					<Route 
						path='/weather'
						component={ Weather }
					/>
					<Route 
						path='/device'
						component={ Device }
					/>
					<Route 
						path='/documents'
						component={ Documents }
					/>
					<Route 
						path='/notFound'
						component={ NotFound }
					/>
					<Route 
						path='/githubList'
						component={ GithubList }
					/>
					<Route 
						path='/fitnessExercises'
						component={ FitnessExercises }
					/>
					{/* Puedo elegir si quiero informar que ese path no existe (opcion 1) o puedo redirigir al path que yo desee (opcion 2) */}
					{/* Opcion 1 */}
					{/* <Route
						component={ NotFound }
					/> */}
					{/* Opcion 2 */}
					<Redirect to='/landingPage'/>
				</Switch>
			</Router>
		{/*
			Para hacer un menu con botones que lleven a los proyectos:
			<button
				onClick={() => history.push('/Login')}
			>
				Login
			</button>
			
			<button
				onClick={() => history.push('/Catalogue')}
			>
				Catalogue
			</button>
			
			<button
				onClick={() => history.push('/Dashboard')}
			>
				Dashboard
			</button>

			<button
				onClick={() => history.goBack()}
			>
				Go back
			</button>
			
			<button
				onClick={() => history.goForward()}
			>
				Go forward
			</button>
			
		*/}
		</>
	);
}

export default App;
