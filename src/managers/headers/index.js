const makeHeadersManager = ({
  authManager,
}) => ({
  getHeaders: () => {
    const headers = {
      Authorization: undefined,
      'Content-Type': 'application/json; charset=UTF-8',
    };

    const credentials = authManager.getCredentials();
    if (credentials) {
      headers.Authorization = `Bearer ${credentials}`;
    }
    return headers;
  },
});

export default makeHeadersManager;
