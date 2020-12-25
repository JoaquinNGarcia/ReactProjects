import {
    object
} from 'prop-types';
import {
    DashboarContainer
} from './styled';
import NavBarV from '../../../commons/NavBarV/main';
import Catalogue from '../../../commons/Catalogue/main';
import React from 'react';

const Dashboard = () => {
    return (
        <DashboarContainer>
            <NavBarV />
            <Catalogue />
        </DashboarContainer>
    );
};

Dashboard.propTypes = {
    history: object
};

export default Dashboard;
