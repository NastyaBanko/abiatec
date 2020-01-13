import { BASE_BREAKING_BAD_URL } from '../index';
import axios from 'axios';

const http = axios.create();

const makeCustomApi = ({ client, headersManager }) => ({
    getBreakingBad: () =>
        http.get(`${BASE_BREAKING_BAD_URL}/characters`),
});

export default makeCustomApi;
