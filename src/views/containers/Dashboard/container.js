import Dashboard from './main';
import { connect } from 'react-redux';

const mapStateToProps = () => ({
    
});

const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

/*
import StatisticsSurveys from './main';
import { connect } from 'react-redux';
import { getProfessional } from 'core/Option/action';
import { getSurveysData } from 'core/Statistics/action';

const mapStateToProps = ({ option: { professionals }, statistics: { surveys } }) => ({
    professionals,
    surveys
});

const mapDispatchToProps = {
    getProfessional,
    getSurveysData
};

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsSurveys);
*/