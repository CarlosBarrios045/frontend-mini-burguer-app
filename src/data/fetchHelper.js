import axios from "axios";

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("tokenApp");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// register axios interceptor which handle responses errors
axios.interceptors.response.use(
  (response) => {
    return { ...response.data, status: response.status };
  },
  (error) => {
    // console.error(error.message, 'here', error); // logging here
    const { response = {} } = error;

    if (
      response.status >= 400 &&
      response.status !== 401 &&
      response.status < 500
    ) {
      const err = {
        message: `Bad response from server at ${response.url} => ${response.status}, ${response.statusText}`,
        url: response.url,
        status: +response.status,
        statusText: response.statusText,
        data: response.data,
      };
      const { data } = response;
      const { message } = data;

      let newMessage = "";

      if (message) {
        newMessage = message[0]?.messages[0]?.message;
      }

      err.message = newMessage;

      return Promise.reject(err);
    }

    return Promise.reject(error.response.data);
  }
);
