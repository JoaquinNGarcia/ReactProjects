import React, {
    Fragment,
    useState
} from 'react';
// import {

// } from 'prop-types';
import {
    GithubListCard,
    GithubListCardContent,
    GithubListContainer,
    GithubListSearch,
    Header,
    Input,
    Text
} from './styled';
import Image from '../../components/Image/main';
import NavBarH from '../../../commons/NavBarH/main';
import SearchButton from '../../../commons/SearchButton/main';

const GithubList = ({
    setGitHubInfo
}) => {

    const [avatar, setAvatar] = useState('');
    const [error, setError] = useState(null);
    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('');
    const [id, setID] = useState('');
    const [name, setName] = useState('');
    const [notification, setNotification] = useState('');
    const [repos, setRepos] = useState('');
    const [searchText, setSearchText] = useState('');
    const [service, setService] = useState('');
    const [userInput, setUserInput] = useState('');
    const [userName, setUserName] = useState('');

    const handleSearch = ({target: { value } }) => {
        setUserInput(value);
        userInput.length < 3 ? setSearchText('Ingrese 4 caracteres como minimo.') : setSearchText('')
    }

    const handleSubmit = () => {
        !searchText && userInput !== 'osana-salud' && (
                fetch(`https://api.github.com/users/${userInput}`)
                    .then(res => res.json())
                    .then(data => {
                        if (data.message)
                            setError(data.message) 
                        else { 
                            setData(data);
                            setError(null);
                        }
                })
            )
        userInput === 'osana-salud' ? setNotification('No se permite realizar esta búsqueda.') : setNotification('')
    }

    const setData = ({
        avatar_url,
        followers,
        following,
        html_url,
        id,
        login,
        name,
        public_repos
    }) => {
        setAvatar(avatar_url);
        setFollowers(followers);
        setFollowing(following);
        setID(id);
        setName(name);
        setRepos(public_repos);
        setService(html_url);
        setUserName(login);
    }

    let styleButton = "#000000";
    let styleColor = "#FFFFFF";

    return (
        <Fragment>
            <NavBarH/>
            <GithubListContainer>
                <GithubListSearch>
                    <Input
                        name="GitHub user"
                        onChange={ handleSearch }
                        placeholder="GitHub user"
                        type="text"
                        value={ userInput }
                    />
                    <SearchButton
                        backgroundColor={ styleButton }
                        color={ styleColor }
                        handleOnClick={ handleSubmit }
                        text="Search"
                    />
                </GithubListSearch>
                { searchText && ( <Text> { searchText } </Text> )}
                { notification && ( <Text> { notification } </Text> ) }
                { error
                    ? ( <Text> { error } </Text> )
                    : !!avatar &&
                        (
                            <GithubListCard>
                                <Image
                                    src={ !!avatar ? avatar : '' }
                                />
                                <GithubListCardContent>
                                    <Header>
                                        - Nombre: { !!name ? name : 'n/d' }
                                    </Header>
                                    <Header>
                                        - ID: { !!id ? id : 'n/d' }
                                    </Header>
                                    <Header>
                                        - Nombre de usuario: { !!userName ? userName : 'n/d' }
                                    </Header>
                                    <Header>
                                        - Servicio al que corresponde: { !!service ? service : 'n/d' }
                                    </Header>
                                </GithubListCardContent> 
                                <GithubListCardContent>
                                    - { followers } Seguidores
                                </GithubListCardContent>
                                <GithubListCardContent>
                                    - { repos } Repositorios
                                </GithubListCardContent>
                                <GithubListCardContent>
                                    - { following } Amigos
                                </GithubListCardContent>
                            </GithubListCard>
                        )                  
                }
            </GithubListContainer>
        </Fragment>
    );
};

// GithubList.propTypes = {

// };

export default GithubList;
