import makeCustomApi from './customApi';

export const BASE_GHIBLI_URL = 'https://ghibliapi.herokuapp.com';

export const makeApi = (dependencies = {}) => ({
  custom: makeCustomApi(dependencies),
});

export default makeApi;
