import { BASE_GHIBLI_URL } from '../index';
import axios from 'axios';

const http = axios.create();

const makeCustomApi = ({client, headersManager}) => ({
    getGhibliFilms: () =>
        http.get(`${BASE_GHIBLI_URL}/films`),
});

export default makeCustomApi;
