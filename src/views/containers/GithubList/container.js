import GithubList from './main';
import { connect } from 'react-redux';
import {
    setGitHubInfo
} from '../../../core/GitHubInfo/action';

const mapStateToProps = state => (
   console.log('state: ', state)
);

const mapDispatchToProps = {
    setGitHubInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(GithubList);
