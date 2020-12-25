import {
    NavMenu,
    Info,
    Title,
    ButtonContent
} from './styled';
import React, { 
    // Fragment, 
    useState
} from 'react';
import moment from 'moment';
import Button from '../Button/main';
import {
    object
} from 'prop-types';
import { Redirect } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';

const NavBarV = () => {
    const [color, setColor] = useState(false);
    const [logout, setLogout] = useState(false);
    const time = moment().format('HH:mm');
    const greet = (time >= '06:00') && (time < '13:00')
        ? 'Buenos días'
        : (time >= '13:00') && (time < '20:00')
            ? 'Buenas tardes'
            : 'Buenas noches';

    const handleOnClick = () => {
        color ? setColor(false) : setColor(true);
    }

    const handleLogout = () => {
        localStorage.removeItem('account');
        setTimeout(() => setLogout(true), 1000);
    }

    let localstorageData = localStorage.getItem('account');
    let { user } = !!localstorageData && JSON.parse(localstorageData);

    let styleB = color ? "#060b26" : "#B9B9B9";
    let styleC = color ? "#FFFFFF" :"#000000";
    let styleButton = color ? "#FFFFFF" :"#000000";
    let styleColor = color ? "#000000" : "#FFFFFF";
    return (
        <>
            { logout && <Redirect to='/login'/> }
            <NavMenu styleBackground={ styleB } styleColor={ styleC }>
                <Info>
                    <Title>
                        { `${ greet }, ${ user }` }
                    </Title>
                </Info>
                <ButtonContent>
                    <Button
                        backgroundColor= { styleButton }
                        color = { styleColor }
                        handleOnClick={ handleOnClick }
                        text={ `${ color  ? 'Standard' : 'Dark Mode' }`}
                    />
                    <Button
                        backgroundColor= { styleButton }
                        color = { styleColor }
                        handleOnClick={ handleLogout }
                        text='Cerrar sesion'
                    />
                </ButtonContent>
            </NavMenu>
        </>
  );
}

NavBarV.propTypes = {
    history: object
};

export default NavBarV;
// export default withRouter(NavBarV);
