import axios from 'axios';

const makeAxiosErrorInterceptor = (code, callback) =>
  axios.interceptors.response.use(
    response => response,
    (error) => {
      if (code === error.response.status) {
        callback();
      }
      return Promise.reject(error);
    },
  );

export default makeAxiosErrorInterceptor;
