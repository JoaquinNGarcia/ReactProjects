
import axios from '../../Api';

export const registerServ = async payload => {
    try {
        const url = `/patient/login`;
        const { data: { data } } = await axios.post(url, payload);
        return true;
    } catch (e) {
        throw e;
    }
}
