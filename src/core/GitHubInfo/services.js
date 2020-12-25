import axios from 'axios';

export const infoGitHub = async () => {
    try {
        const url = 'https://api.github.com/users/example';
        const info1 = await axios.get(url);
        console.log('info1: ', info1);
        return info1;
    } catch (err) {
        throw err;
    }
};
