import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import {
    NavMenu,
    Info,
    Title
} from './styled';
// import {
//     object
// } from 'prop-types';
// import { withRouter } from 'react-router-dom';

const NavBarH = () => {
    const time = moment().format('HH:mm');
    const greet = (time >= '06:00') && (time < '13:00')
        ? 'Buenos días'
        : (time >= '13:00') && (time < '20:00')
            ? 'Buenas tardes'
            : 'Buenas noches';

    let styleB = "#B9B9B9";
    let styleC = "#000000";
    return (
        <NavMenu styleBackground={ styleB } styleColor={ styleC }>
            <Info>
                { `${ greet }` }
            </Info>
        </NavMenu>
  );
}

// NavBarH.propTypes = {
//     history: object
// };

export default NavBarH;
