
import {
    SET_GITHUB_INFO
} from '../types';

const defaultState = () => ({
	data: ['']
});

export default function GitHubReducer(state = defaultState(), { type, payload }) {
    switch(type) {
        case SET_GITHUB_INFO:
            return { ...state, data: payload };
            default: return state;
    }
}
